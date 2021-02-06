import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../presentation/pages/Login';

const Stack = createStackNavigator();



const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
};

export default StackNavigator;