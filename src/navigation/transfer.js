import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TransferScreen from '../screens/TransferScreen';
import TransferAmountStack from './transfer-amount';

const Stack = createNativeStackNavigator();

function TransferStack() {
  return (
    <Stack.Navigator
      initialRouteName="TransferScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferAmountStack"
        component={TransferAmountStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default TransferStack;
