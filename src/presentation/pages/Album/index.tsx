import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import {
  StatusBar,
  Container,
  SearchBarPost,
  FlatList
} from './styles';

import { IAlbum } from '../../../data/protocols/Album';

import api from '../../../infra/services/api';

const Album: React.FC = () => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {

  }, [])

  const LoadAlbum = () => {
    api.get('/albums')
      .then(response => {
        setAlbums(response.data);
        console.log(response.data);
      })
  }

  const SearchPost = (value: string) => {

  }
  return (
    <>
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        <Header />

        <SearchBarPost
          placeholder="Digite o título"
          onChangeText={value => { setValueSearch(String(value)), SearchPost(value) }}
          value={valueSearch}
        />

        {/* <FlatList
          data={posts}
          keyExtractor={posts => String(posts.id)}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={renderItem}
        /> */}

      </Container>
    </>
  )
}

export default Album;