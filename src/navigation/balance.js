import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BalanceStatScreen from '../screens/BalanceStatScreen';

const Stack = createNativeStackNavigator();

function BalanceStack() {
  return (
    <Stack.Navigator
      initialRouteName="BalanceStatScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="BalanceStatScreen"
        component={BalanceStatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default BalanceStack;
