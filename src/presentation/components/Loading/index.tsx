import React from 'react';

import {
  ActivityIndicator,
  View
} from './styles';

import { ILoading } from '../../../data/protocols/Loading';

const Loading: React.FC<ILoading> = ({clr}) => {
  return (
    <ActivityIndicator size="large" color={clr !== 1 ? "#FFFFFF" : "#000000"} />
  )
}

export default Loading;