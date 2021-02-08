import React, { useContext, useCallback, useState, useEffect } from 'react';

import {
  Container,
  Modal,
  ScroolView,
  BtnBack,
  IconBack,
  Card,
  Alert,
  FlatList,
  TxtInfocard,
  TxtTitleCard,
  TxtTitle,
  CicleView,
  ViewComment,
  MessageIcon,
  ViewInfoComment,
  TxtEmail,
  TxtName,
  TextBody,
} from './styles';

import { ListRenderItem } from 'react-native';

import ModalPostContext from '../../../data/contexts/ModalPost';

import ErrorContext from '../../../data/contexts/Error';

import { IComment } from '../../../data/protocols/ModalPost';

import Loading from '../Loading';

import Error from '../Error';

import api from '../../../infra/services/api';

const ModalPost: React.FC = () => {
  const { post, stateModal, setStateModal } = useContext(ModalPostContext);
  const [comments, setComments] = useState<IComment[]>([]);
  const [load, setLoad] = useState<Boolean>(true);
  const [con, setCon] = useState<Boolean>(false);
  const { pressTry, setPressTry } = useContext(ErrorContext);


  useEffect(() => {
    setComments([]);
    loadComments();
  }, [post, stateModal])

  useEffect(() => {
    if(pressTry === 2) {
      setComments([]);
      loadComments();
    }
  }, [pressTry])

  const loadComments = useCallback(() => {
    api.get(`/posts/${post?.id}/comments`)
      .then(response => {
        setTimeout(() => {
          setLoad(false);
          setPressTry(0);
          setCon(false);
          setComments(response.data);
        }, 2000)
      })
      .catch(error => {
        setLoad(false);
        setPressTry(0);
        setCon(true);
      })
  }, [post, stateModal])

  const renderItem: ListRenderItem<IComment> = ({ item }) => {
    return (
      <>
        <ViewComment>
          <CicleView>
            <MessageIcon name="message-circle" size={30} />
          </CicleView>
          <ViewInfoComment>
            <TxtName>{item.name}</TxtName>
            <TxtEmail>{item.email}</TxtEmail>
          </ViewInfoComment>
        </ViewComment>

        <TextBody>
          {item.body}
        </TextBody>
      </>
    )
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={stateModal}
        onRequestClose={() => {
          setLoad(true);
          setStateModal(false);
        }}
      >
        <ScroolView>
            <BtnBack onPress={() => { setLoad(true);  setStateModal(false);}}>
              <IconBack name="arrow-left" size={35} />
            </BtnBack>

            <Card>
              <TxtTitleCard>
                {post?.title}
              </TxtTitleCard>

              <TxtInfocard>
                {post?.body}
              </TxtInfocard>
            </Card>
            <TxtTitle>Comentários</TxtTitle>
            {
              con
              ? <Error opt={2}/>
              :
              load === true
              ?
              <Loading />
              : 
              <FlatList
                data={comments}
                keyExtractor={comment => String(comment.id)}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                renderItem={renderItem}
              />
            }
          </ScroolView>
      </Modal>
    </Container>
  )
}

export default ModalPost;
