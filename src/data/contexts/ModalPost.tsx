import React, { createContext, useState } from 'react';

import { IModalPost } from '../protocols/ModalPost';

import { IPost } from '../protocols/Post';

const ModalPostContext = createContext<IModalPost>({} as IModalPost);

export const ModalPostProvider: React.FC = ({ children }) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [stateModal, setStateModal] = useState<boolean>(false);
  return (
    <ModalPostContext.Provider value={{ post, setPost, stateModal, setStateModal }}>
      {children}
    </ModalPostContext.Provider>
  )
}

export default ModalPostContext;