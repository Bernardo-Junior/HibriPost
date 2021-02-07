import React from 'react';

import {
  ActivityIndicator,
  View
} from './styles';

const Loading: React.FC = () => {
  return (
    <ActivityIndicator size="large" color="#000000" />
  )
}

export default Loading;