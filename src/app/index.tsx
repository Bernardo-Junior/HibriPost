import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation'
])

import { AuthProvider } from '../data/contexts/Auth';

import Routes from '../infra/routes';

const App: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;