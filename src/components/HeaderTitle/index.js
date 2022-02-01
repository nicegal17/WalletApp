import {View, Text} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HeaderTitle = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'History',
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 24,
      },
      headerStyle: {
        backgroundColor: '#FCFCFB',
      },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
    });
  });
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default HeaderTitle;
