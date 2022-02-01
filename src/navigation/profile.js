import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';
import MyQRCodeScreen from '../screens/MyQRCodeScreen';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyQRCodeScreen"
        component={MyQRCodeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
