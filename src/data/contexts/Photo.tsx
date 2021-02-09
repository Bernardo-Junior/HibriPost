import React, { createContext, useState } from 'react';

import { IPhotoContext, IPhoto } from '../protocols/Photo';

const PhotoContext = createContext<IPhotoContext>({} as IPhotoContext);

export const PhotoProvider: React.FC = ({children}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [page, setPage] = useState<number>(0);
  const [modalPictures, setModalPictures] = useState<boolean>(false);
  return (
    <PhotoContext.Provider value={{ photos, setPhotos, page, setPage, modalPictures, setModalPictures }}>
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoContext;