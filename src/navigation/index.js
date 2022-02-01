import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import RootStack from './tab';

const Stack = createNativeStackNavigator();

function IntroStack() {
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RootStack"
        component={RootStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default IntroStack;
