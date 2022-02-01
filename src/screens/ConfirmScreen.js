import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';

import Color from '../theme/Color';

import ProfileSVG from '../assets/svg/contactavatar.svg';
import SendSVG from '../assets/svg/send.svg';
import CoinDollarSVG from '../assets/svg/coin-dollar.svg';

const ConfirmScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <Image
        source={require('../assets/img/confirm-bg.png')}
        resizeMode="contain"
        style={styles.ImageStyle}
      />

      <View style={styles.View}>
        <View style={styles.SendSVG}>
          <SendSVG />
        </View>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Are you sure ?</Text>
        </View>
        <View style={styles.SubTitleView}>
          <Text style={styles.SubTitle}>Transfer your money to</Text>
        </View>
        <View>
          <View style={styles.ProfileView}>
            <ProfileSVG width={73} height={73} />
          </View>
          <View style={styles.ProfileNameView}>
            <Text style={styles.TextName}>Andy Robert</Text>
          </View>
          <View style={styles.AccountView}>
            <Text style={styles.SubTitle}>**** **** 9256</Text>
          </View>
          <View style={styles.AmountView}>
            <View style={styles.TransactionView}>
              <Text style={styles.TransferText}>Transfer Nominal</Text>
              <Text style={styles.TransferText}>$600.00</Text>
            </View>
            <View style={styles.TransactionView}>
              <Text style={styles.TransferText}>Admin Fee</Text>
              <Text style={styles.TransferText}>$0</Text>
            </View>
          </View>
          <View style={styles.TotalView}>
            <Text style={styles.TotalText}>Total</Text>
            <Text style={styles.TotalAmount}>$600.00</Text>
          </View>
        </View>
        <View style={styles.CoinDollarSVG}>
          <CoinDollarSVG />
        </View>
        <View style={styles.ButtonView}>
          <Button
            title="Cancel"
            buttonStyle={[styles.CancelButton, styles.ButtonsWidth]}
            titleStyle={styles.CancelTitle}
            type="outline"
          />
          <Button
            title="Send"
            buttonStyle={[styles.SendButton, styles.ButtonsWidth]}
            titleStyle={styles.SendTitle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
    position: 'relative',
  },
  ImageStyle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: -35,
    bottom: 0,
    left: -45,
    zIndex: 0,
  },
  View1: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'red',
  },
  View: {
    backgroundColor: Color.colorSecondary,
    borderRadius: 15,
    position: 'relative',
    flex: 1,
    marginTop: 130,
    marginBottom: 100,
    margin: 35,
  },
  SendSVG: {
    position: 'absolute',
    top: -32,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  TitleView: {
    marginHorizontal: 82,
    marginTop: 59,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 21.6,
    color: Color.colorLabel,
  },
  SubTitleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 80,
    marginTop: 8,
  },
  SubTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 14.4,
    color: Color.colorLabel,
  },
  ProfileView: {
    marginTop: 11,
    marginHorizontal: 131,
  },
  TextName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorLabel,
  },
  AmountView: {
    marginTop: 20,
    marginHorizontal: 32,
    borderBottomColor: '#D7D6D6',
    borderBottomWidth: 1,
  },
  TransactionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  TotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginVertical: 13,
  },
  TransferText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 14.4,
  },
  TotalText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorLabel,
  },
  TotalAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 21.6,
    color: Color.colorLabel,
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 31,
  },
  SendButton: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    height: 45,
  },
  CancelButton: {
    backgroundColor: Color.colorSecondary,
    borderColor: Color.colorPrimary,
    borderRadius: 15,
    height: 45,
    borderWidth: 1.5,
  },
  ButtonsWidth: {
    width: 122,
  },
  CancelTitle: {
    color: Color.colorTextButton,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  SendTitle: {
    color: Color.colorSecondary,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  CoinDollarSVG: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  ProfileNameView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 11,
  },
  AccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
