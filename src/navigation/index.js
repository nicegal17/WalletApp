import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyWalletScreen from '../screens/MyWalletScreen';
import DetailActivityScreen from '../screens/DetailActivityScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyWalletScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="AddPaymentScreen"
        component={AddPaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyWalletScreen"
        component={MyWalletScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailActivityScreen"
        component={DetailActivityScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
