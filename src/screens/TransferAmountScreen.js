import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Input, ListItem} from 'react-native-elements';

import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import ContactSVG from '../assets/svg/contactavatar.svg';
import DollarSVG from '../assets/svg/dollar.svg';

const TransferAmountScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Transfer',
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 24,
      },
      headerStyle: {
        backgroundColor: Color.colorSecondary,
        marginVertical: 34,
      },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.ListItem}>
        <ListItem>
          <ContactSVG width={55} height={55} />
          <ListItem.Content>
            <ListItem.Title style={styles.Title}>Andy Robert</ListItem.Title>
            <ListItem.Subtitle style={styles.SubTitle}>
              **** **** 9256
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="#9DA0C6" />
        </ListItem>
      </View>
      <View style={styles.AmountView}>
        <Input
          placeholder="600.00"
          leftIcon={() => <DollarSVG />}
          inputStyle={styles.InputStyle}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
      </View>
      <View style={{margin: 35, paddingBottom: 60}}>
        <Button
          title="Send Money"
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonText}
          onPress={() => navigation.navigate('TransferAmountScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransferAmountScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorWhiteBG,
  },
  ListItem: {
    marginTop: 45,
    margin: 35,
    backgroundColor: Color.colorWhiteBG,
    borderRadius: 10,
    shadowColor: '#6D542F',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 3,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
    marginHorizontal: 23,
  },
  SubTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 14.4,
    marginHorizontal: 23,
    paddingTop: 3,
  },
  Button: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 10,
    height: 59,
  },
  ButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 16.8,
  },
  InputStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    lineHeight: 43.2,
    textAlign: 'right',
    paddingTop: 10,
  },
  AmountView: {
    paddingTop: 49,
    marginHorizontal: 35,
    flex: 1,
  },
});
