import React, { createContext, useState } from 'react';

import { IModaGalleryContext } from '../protocols/ModalGallery';

const ModalGalleryContext = createContext<IModaGalleryContext>({} as IModaGalleryContext);

export const ModalGalleryProvider: React.FC = ({children}) => {
  const [modalGallery, setModalGallery] = useState<boolean>(false);
  const [idAlbum, setIdAlbum] = useState<Number | null>(null);
  const [name, setName] = useState<String>("");
  const [stateModalLoading, setStateModalLoading] = useState<boolean>(false);
  return (
    <ModalGalleryContext.Provider value={{modalGallery, setModalGallery, idAlbum, setIdAlbum, name, setName, stateModalLoading, setStateModalLoading}}>
      {children}
    </ModalGalleryContext.Provider>
  )
}

export default ModalGalleryContext;