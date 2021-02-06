import React, { useEffect, useState, useCallback } from 'react';

import api from '../../../infra/services/api';

import Header from '../../components/Header';

import { IPost } from '../../../data/protocols/Post';

import { Alert, ListRenderItem } from 'react-native';


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
  ViewBtnMore
} from './styles';

const Post: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [copyPosts, setCopyPosts] = useState<IPost[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");

  useEffect(() => {
    loadData();
  }, [])

  const loadData = useCallback(() => {
    api.get('/posts')
      .then(response => {
        setPosts(response.data);
        setCopyPosts(response.data);
      })
      .catch(error => {
        Alert.alert("Ocorreu um erro", error);
      })
  }, [])

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
          <BtnMore onPress={() => {}}>
            <IconArrow name="arrow-right-circle" size={35} />
          </BtnMore>
        </ViewBtnMore>
      </Card>
    )
  }

  return (
    <>
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        <ScroolView nestedScrollEnabled={true}>
          <Header />
          <SearchBarPost
            placeholder="Search"
            onChangeText={value => { setValueSearch(String(value)) }}
            value={valueSearch}
          />
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