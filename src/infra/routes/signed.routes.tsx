import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialIcons.loadFont();

import Post from '../../presentation/pages/Post';
import Profile from '../../presentation/pages/Profile';
import Album from '../../presentation/pages/Album';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Post') {
              iconName = focused ? 'message-square' : 'message-square';
            } else if (route.name === 'Album') {
              iconName = focused
                ? 'image'
                : 'image';
            } else {
              iconName = focused
                ? 'user'
                : 'user';
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#40657A',
          inactiveBackgroundColor: '#16394D',
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#FFFFFF',
        }}>
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Album" component={Album} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
  )
}

export default Routes;
