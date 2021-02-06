import React from 'react';

import Header from '../../components/Header';

import {
  StatusBar,
  Container
} from './styles';

const Album: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={"#E5E5E5"} />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default Album;