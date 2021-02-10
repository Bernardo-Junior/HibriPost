import { IPhoto } from '../data/protocols/ModalGallery';

export const formatData = (data: IPhoto[], columns: number) => {
  const rows = Math.floor(data.length / columns);

  let lastRowElements = data.length - rows * columns;
  while(lastRowElements !== columns) {
    data.push({
      albumId: (lastRowElements + (Math.random() * (9999 - 1) + 1)),
      id: (lastRowElements + (Math.random() * (9999 - 1) + 1)),
      thumbnailUrl: `empty-${lastRowElements}`,
      title: "empty",
      url: `empty-${lastRowElements}`
    })

    lastRowElements += 1;
  }

  return data;
}