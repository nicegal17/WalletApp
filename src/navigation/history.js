import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HistoryScreen from '../screens/HistoryScreen';
import TransferScreen from '../screens/TransferScreen';
import TransferAmountScreen from '../screens/TransferAmountScreen';

const Stack = createNativeStackNavigator();

function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferAmountScreen"
        component={TransferAmountScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HistoryStack;
