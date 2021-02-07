import React, { useContext, useCallback, useState, useEffect } from 'react';

import {
  Container,
  Modal,
  ScroolView,
  ViewModal,
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
  TextBody
} from './styles';

import { ListRenderItem } from 'react-native';

import ModalPostContext from '../../../data/contexts/ModalPost';

import { IComment } from '../../../data/protocols/ModalPost';

import api from '../../../infra/services/api';

const ModalPost: React.FC = () => {
  const { post, stateModal, setStateModal } = useContext(ModalPostContext);
  const [comments, setComments] = useState<IComment[]>([]);


  useEffect(() => {
    if (post?.id != null) {
      loadComments();
    }
  }, [stateModal])

  const loadComments = useCallback(() => {
    api.get(`/posts/${post?.id}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        Alert.alert("Erro", "Ocorreu um erro de conexão, por favor tente novamente");
      })
  }, [stateModal])

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
          setComments([]);
          setStateModal(false);
        }}
      >
        <ScroolView>
          <ViewModal>
            <BtnBack onPress={() => { setStateModal(false), setComments([]); }}>
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
            <FlatList
              data={comments}
              keyExtractor={comment => String(comment.id)}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              renderItem={renderItem}
            />
          </ViewModal>
        </ScroolView>
      </Modal>
    </Container>
  )
}

export default ModalPost;
