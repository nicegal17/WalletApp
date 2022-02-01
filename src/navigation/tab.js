import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardStack from './main';
import BalanceStack from './balance';
import SettingScreen from './settings';
import HistoryScreen from './history';

import HomeSVG from '../assets/svg/home.svg';
import HomeActiveSVG from '../assets/svg/home-active.svg';
import GraphSVG from '../assets/svg/graph.svg';
import GraphActiveSVG from '../assets/svg/graph-active.svg';
import HistorySVG from '../assets/svg/history.svg';
import HistoryActiveSVG from '../assets/svg/history-active.svg';
import SettingsSVG from '../assets/svg/settings.svg';
import SettingsActiveSVG from '../assets/svg/settings-active.svg';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: null,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute', height: 75},
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <HomeActiveSVG width={24} height={24} />
            ) : (
              <HomeSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Balance"
        component={BalanceStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <GraphActiveSVG width={24} height={24} />
            ) : (
              <GraphSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <HistoryActiveSVG width={24} height={24} />
            ) : (
              <HistorySVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <SettingsActiveSVG width={24} height={24} />
            ) : (
              <SettingsSVG width={24} height={24} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
