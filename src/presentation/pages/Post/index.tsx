import React, { useEffect, useState, useCallback, useContext } from 'react';

import api from '../../../infra/services/api';

import Header from '../../components/Header';

import Error from '../../components/Error';

import Loading from '../../components/Loading';

import { IPost } from '../../../data/protocols/Post';

import { Alert, ListRenderItem } from 'react-native';

import ModalPostContext from '../../../data/contexts/ModalPost';

import ErrorContext from '../../../data/contexts/Error';

import AuthContext from '../../../data/contexts/Auth';

import ModalPost from '../../components/ModalPost';

import { statePage } from '../../../utils/statePagination';

import {
  StatusBar,
  ViewHeader,
  ViewIconHeader,
  IconExit,
  BtnExit,
  ViewIconExit,
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
  const { logOut } = useContext(AuthContext);
  const [page, setPage] = useState<number>(1);
  const [stateBtnLeft, setStateBtnLeft] = useState<boolean>(true);
  const [stateBtnRight, setStateBtnRight] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [con, setCon] = useState<Boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
    statePage({page, setStateBtnLeft, setStateBtnRight});
  }, [page])

  useEffect(() => {
    if (pressTry === 1) {
      loadData();
      statePage({page, setStateBtnLeft, setStateBtnRight});
    }
  }, [pressTry])

  const loadData = useCallback(() => {
    api.get(`/posts?userId=${page}`)
      .then(response => {
        if (response.data != []) {
          setLoading(false);
          setPressTry(0);
          setPosts(response.data);
          setRefreshing(false);
          setCon(true);
          setCopyPosts(response.data);
        }
      })
      .catch(error => {
        setLoading(false);
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

  const _onRefresh = () => {
    setRefreshing(true);
    loadData();
  }

  const searchPost = (value: string) => {
    const result = copyPosts.filter(post => post.title.includes(value));

    setPosts(result);
  }

  return (
    <>
      <ModalPost />
      <StatusBar backgroundColor={"#E5E5E5"} barStyle="dark-content" />
      <Container>
        {con
          ?
          <>
            <ScroolView
              keyboardShouldPersistTaps='handled'
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={_onRefresh.bind(this)}
                />
              }
            >
              <ViewHeader>
                <ViewIconHeader>
                  <Header />
                </ViewIconHeader>
                <ViewIconExit>
                  <BtnExit onPress={() => { logOut() }}>
                    <IconExit name="log-out" size={30} />
                  </BtnExit>
                </ViewIconExit>
              </ViewHeader>

              <SearchBarPost
                placeholder="Digite o título"
                onChangeText={value => { setValueSearch(value), searchPost(value) }}
                value={valueSearch}
              />

              {loading
                ? <Loading clr={1} />

                : <ViewPagination>
                  <TxtPage>{page} de 10</TxtPage>
                  <BtnLeft
                    disabled={stateBtnLeft}
                    state={stateBtnLeft}
                    onPress={() => { setPage(page - 1), setStateBtnLeft(false), setLoading(true) }}>
                    <IconLeft name="chevron-left" size={30} />
                  </BtnLeft>
                  <BtnRight
                    disabled={stateBtnRight}
                    state={stateBtnRight}
                    onPress={() => { setPage(page + 1), setStateBtnLeft(false), setLoading(true) }}>
                    <IconRight name="chevron-right" size={30} />
                  </BtnRight>
                </ViewPagination>
              }

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