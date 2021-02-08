import React, { createContext, useState } from 'react';

import { IModaGalleryContext } from '../protocols/ModalGallery';

const ModalGalleryContext = createContext<IModaGalleryContext>({} as IModaGalleryContext);

export const ModalGalleryProvider: React.FC = ({children}) => {
  const [modalGallery, setModalGallery] = useState<boolean>(false);
  const [idAlbum, setIdAlbum] = useState<Number | null>(null);
  const [name, setName] = useState<String>("");
  return (
    <ModalGalleryContext.Provider value={{modalGallery, setModalGallery, idAlbum, setIdAlbum, name, setName}}>
      {children}
    </ModalGalleryContext.Provider>
  )
}

export default ModalGalleryContext;