import React, { useEffect, useState, useCallback, useContext } from 'react';

import api from '../../../infra/services/api';

import Header from '../../components/Header';

import { IPost } from '../../../data/protocols/Post';

import { Alert, ListRenderItem } from 'react-native';

import ModalPostContext from '../../../data/contexts/ModalPost';

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
  TxtPage
} from './styles';

const Post: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [copyPosts, setCopyPosts] = useState<IPost[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const {  setPost, setStateModal } = useContext(ModalPostContext);
  const [page, setPage] = useState<number>(1);
  const [stateBtnLeft, setStateBtnLeft] = useState<boolean>(true);
  const [stateBtnRight, setStateBtnRight] = useState<boolean>(false); 

  useEffect(() => {
    loadData();
    statePage();
  }, [page])

  const statePage = () => {
    if(page === 1) {
      setStateBtnLeft(true)
    }
    else if(page === 10) {
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
        if(response.data != null){
          setPosts(response.data);
          setCopyPosts(response.data);
        } 
      })
      .catch(error => {
        Alert.alert("Ocorreu um erro", error);
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
          <BtnMore onPress={() => {setStateModal(true), setPost(item)}}>
            <IconArrow name="arrow-right-circle" size={35} />
          </BtnMore>
        </ViewBtnMore>
      </Card>
    )
  }

  return (
    <>
      <ModalPost />
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        <ScroolView nestedScrollEnabled={true}>
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
              onPress={() => {setPage(page-1), setStateBtnLeft(false)}}>
              <IconLeft name="chevron-left" size={35} />
            </BtnLeft>
            <TxtPage>{page}</TxtPage>
            <BtnRight 
              disabled={stateBtnRight}
              state={stateBtnRight} 
              onPress={() => {setPage(page+1), setStateBtnLeft(false)}}>
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
      </Container>
    </>
  )
}

export default Post;