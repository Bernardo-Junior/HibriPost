import { IStatePage } from '../data/protocols/Album';

export const statePage = ({page , setStateBtnLeft, setStateBtnRight}: IStatePage) => {
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