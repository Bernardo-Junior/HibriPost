import React, { useState, useEffect, useContext, useCallback } from 'react';

import Header from '../../components/Header';

import { Alert, ListRenderItem } from 'react-native';

import ModalGallery from '../../components/ModalGallery';

import ModaGalleryContext from '../../../data/contexts/ModalGallery';

import {
  StatusBar,
  Container,
  SearchBarPost,
  FlatList,
  ContainerCards,
  Cards,
  ScroolView,
  TxtTitle,
  BtnCards,
  RefreshControl,
  BtnLeft,
  BtnRight,
  IconLeft,
  IconRight,
  TxtPage,
  ViewPagination,
  SafeAreaView
} from './styles';

import Loading from '../../components/Loading';

import { IAlbum } from '../../../data/protocols/Album';

import api from '../../../infra/services/api';

const Album: React.FC = () => {
  const { modalGallery, setModalGallery, setIdAlbum, setName, setStateModalLoading } = useContext(ModaGalleryContext);
  const [valueSearch, setValueSearch] = useState<string>("");
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [albumsCopy, setAlbumsCopy] = useState<IAlbum[]>([]);
  const [page, setPage] = useState<number>(1);
  const [stateBtnLeft, setStateBtnLeft] = useState<boolean>(true);
  const [stateBtnRight, setStateBtnRight] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    LoadAlbum();
    statePage();
  }, [page])

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

  const LoadAlbum = useCallback(() => {
    api.get(`/albums?userId=${page}`)
      .then(response => {
        setLoading(false);
        setAlbums(response.data);
        setAlbumsCopy(response.data);
        setRefreshing(false);
      })
      .catch(error => {
        setLoading(false);
        setRefreshing(false);
      })
  }, [page])


  const renderItem: ListRenderItem<IAlbum> = ({ item }) => {
    return (
      <ContainerCards>
        <BtnCards onPress={() => {
          setIdAlbum(item.id),
            setName(item.title),
            setModalGallery(true),
            setTimeout(() => { setStateModalLoading(true) }, 1000)
        }}>
          <Cards >
            <TxtTitle>{item.title}</TxtTitle>
          </Cards>
        </BtnCards>
      </ContainerCards>
    )
  }

  const _onRefresh = () => {
    setRefreshing(true);
    LoadAlbum();
  }

  const searchPost = (value: string) => {
    const result = albumsCopy.filter(album => album.title.includes(value));

    setAlbums(result);
  }

  return (
    <>
      <ModalGallery />
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        <ScroolView
          keyboardShouldPersistTaps='handled'
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={_onRefresh.bind(this)}
            />
          }
        >
          <Header />

          <SearchBarPost
            placeholder="Digite o título"
            onChangeText={value => { setValueSearch(value), searchPost(value) }}
            value={valueSearch}
          />

          {loading
            ? <Loading  clr={1}/>

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
            {
              albums.map((item, index) => {
                return (
                  <ContainerCards key={index} >
                    <BtnCards onPress={() => {
                      setIdAlbum(item.id),
                        setName(item.title),
                        setModalGallery(true),
                        setTimeout(() => { setStateModalLoading(true) }, 50)
                    }}>
                      <Cards>
                        <TxtTitle>{item.title}</TxtTitle>
                      </Cards>
                    </BtnCards>
                  </ContainerCards>
                )
              })
            }
          </SafeAreaView>
        </ScroolView>
      </Container>
    </>
  )
}

export default Album;