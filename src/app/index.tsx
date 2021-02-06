import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Routes from '../infra/routes';

const App: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 15,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;