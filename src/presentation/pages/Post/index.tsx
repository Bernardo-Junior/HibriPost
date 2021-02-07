import React, { useEffect, useState, useCallback, useContext } from 'react';

import api from '../../../infra/services/api';

import Header from '../../components/Header';

import Error from '../../components/Error';

import { IPost } from '../../../data/protocols/Post';

import { Alert, ListRenderItem } from 'react-native';

import ModalPostContext from '../../../data/contexts/ModalPost';

import ErrorContext from '../../../data/contexts/Error';

import ModalPost from '../../components/ModalPost';

import {
  StatusBar,
  Container,
  SearchBarPost,
  FlatList,
  Card,
  ScroolView,
  SafeAreaView,
  TxtTitleCard,
  TxtInfocard,
  BtnMore,
  IconArrow,
  ViewBtnMore,
  ViewPagination,
  BtnRight,
  BtnLeft,
  IconLeft,
  IconRight,
  TxtPage,
  RefreshControl
} from './styles';

const Post: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [copyPosts, setCopyPosts] = useState<IPost[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const { setPost, setStateModal } = useContext(ModalPostContext);
  const { pressTry, setPressTry } = useContext(ErrorContext);
  const [page, setPage] = useState<number>(1);
  const [stateBtnLeft, setStateBtnLeft] = useState<boolean>(true);
  const [stateBtnRight, setStateBtnRight] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [con, setCon] = useState<Boolean>(true);

  useEffect(() => {
    loadData();
    statePage();
  }, [page])

  useEffect(() => {
    if (pressTry === 1) {
      console.log("1");
      loadData();
      statePage();
    }
  }, [pressTry])

  const statePage = () => {
    if (page === 1) {
      setStateBtnLeft(true)
    }
    else if (page === 10) {
      setStateBtnRight(true);
    }
    else {
      setStateBtnLeft(false);
      setStateBtnRight(false);
    }
  }

  const loadData = useCallback(() => {
    api.get(`/posts?userId=${page}`)
      .then(response => {
        if (response.data != []) {
          setPressTry(0);
          setPosts(response.data);
          setRefreshing(false);
          setCon(true);
          setCopyPosts(response.data);
        }
      })
      .catch(error => {
        setPressTry(0);
        setRefreshing(false);
        setCon(false);
      })
  }, [page])


  const renderItem: ListRenderItem<IPost> = ({ item }) => {
    return (
      <Card>
        <TxtTitleCard>
          {item.title}
        </TxtTitleCard>

        <TxtInfocard>
          "{item.body.length < 10
            ? `${item.body}`
            : `${item.body.substring(0, 90)}...`}"
        </TxtInfocard>
        <ViewBtnMore>
          <BtnMore onPress={() => { setStateModal(true), setPost(item) }}>
            <IconArrow name="arrow-right-circle" size={35} />
          </BtnMore>
        </ViewBtnMore>
      </Card>
    )
  }

  function _onRefresh() {
    setRefreshing(true);
    loadData();
  }

  return (
    <>
      <ModalPost />
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        {con
          ?
          <>
            <ScroolView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={_onRefresh.bind(this)}
                />
              }
            >
              <Header />

              <SearchBarPost
                placeholder="Search"
                onChangeText={value => { setValueSearch(String(value)) }}
                value={valueSearch}
              />

              <ViewPagination>
                <BtnLeft
                  disabled={stateBtnLeft}
                  state={stateBtnLeft}
                  onPress={() => { setPage(page - 1), setStateBtnLeft(false) }}>
                  <IconLeft name="chevron-left" size={35} />
                </BtnLeft>
                <TxtPage>{page}</TxtPage>
                <BtnRight
                  disabled={stateBtnRight}
                  state={stateBtnRight}
                  onPress={() => { setPage(page + 1), setStateBtnLeft(false) }}>
                  <IconRight name="chevron-right" size={35} />
                </BtnRight>
              </ViewPagination>
              <SafeAreaView>
                <FlatList
                  data={posts}
                  keyExtractor={posts => String(posts.id)}
                  showsVerticalScrollIndicator={false}
                  numColumns={1}
                  renderItem={renderItem}
                />
              </SafeAreaView>

            </ScroolView>
          </>
          :
          <Error opt={1} />
        }
      </Container>
    </>
  )
}

export default Post;