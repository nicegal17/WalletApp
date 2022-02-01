import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardMainScreen from '../screens/DashboardMainScreen';
import MyCardScreen from '../screens/MyCardScreen';
import TransferSuccessScreen from '../screens/TransferSuccessScreen';
import TransferScreen from '../screens/TransferScreen';
import ContactScreen from '../screens/ContactScreen';
import AddContactScreen from '../screens/AddContactScreen';
import WithdrawScreen from '../screens/WithdrawScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from '../screens/PaymentScreen';
import MyQRCodeScreen from '../screens/MyQRCodeScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="DashboardMainScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="DashboardMainScreen"
        component={DashboardMainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyCardScreen"
        component={MyCardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccessScreen"
        component={TransferSuccessScreen}
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
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WithdrawScreen"
        component={WithdrawScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
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

export default MainStack;
