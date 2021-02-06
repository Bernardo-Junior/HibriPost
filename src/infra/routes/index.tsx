import React, { useContext } from 'react';

import Sign from './sign.routes';
import Signed from './signed.routes';

import AuthContext from '../../data/contexts/Auth';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return (
    signed ? <Signed /> : <Sign />
  )
}

export default Routes;