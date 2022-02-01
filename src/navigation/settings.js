import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingScreen from '../screens/SettingScreen';
import ContactScreen from '../screens/ContactScreen';
import AddContactScreen from '../screens/AddContactScreen';
import ProfileStack from './profile';

const Stack = createNativeStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContactScreen"
        component={AddContactScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
