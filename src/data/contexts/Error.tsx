import React,  { createContext, useState } from 'react';

import { IErroContext } from '../protocols/Error';

const ErrorContext = createContext<IErroContext>({} as IErroContext);

export const ErroProvider: React.FC = ({children}) => {
  const [pressTry, setPressTry] = useState<Number>(0);
  return (
    <ErrorContext.Provider value={{pressTry, setPressTry}} >
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorContext;