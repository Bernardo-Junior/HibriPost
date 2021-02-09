import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { LogBox, StatusBar } from 'react-native';
StatusBar.setBarStyle("dark-content");

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation'
])

import { AuthProvider } from '../data/contexts/Auth';

import { ModalPostProvider } from '../data/contexts/ModalPost';

import { ErroProvider } from '../data/contexts/Error';

import { ModalGalleryProvider } from '../data/contexts/ModalGallery';

import { PhotoProvider } from '../data/contexts/Photo';

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
      <PhotoProvider>
        <ModalGalleryProvider>
          <ErroProvider>
            <ModalPostProvider>
              <AuthProvider>
                <PaperProvider theme={theme}>
                  <Routes />
                </PaperProvider>
              </AuthProvider>
            </ModalPostProvider>
          </ErroProvider>
        </ModalGalleryProvider>
      </PhotoProvider>
    </NavigationContainer>
  )
}

export default App;