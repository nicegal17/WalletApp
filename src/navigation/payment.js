import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PaymentScreen from '../screens/PaymentScreen';
import MyQRCodeScreen from '../screens/MyQRCodeScreen';

const Stack = createNativeStackNavigator();

function PaymentStack() {
  return (
    <Stack.Navigator
      initialRouteName="PaymentScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
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

export default PaymentStack;
