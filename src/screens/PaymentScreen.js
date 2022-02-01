import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Color from '../theme/Color';
import {useNavigation} from '@react-navigation/native';
import {Button, Input} from 'react-native-elements';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import QRSVG from '../assets/svg/qr.svg';
import InternetSVG from '../assets/svg/internet.svg';
import EducationSVG from '../assets/svg/education.svg';
import ElectricitySVG from '../assets/svg/electricity.svg';
import PhoneSVG from '../assets/svg/phone.svg';
import CartSVG from '../assets/svg/cart.svg';
import InsuranceSVG from '../assets/svg/insurance.svg';
import PropertySVG from '../assets/svg/property.svg';
import ShipSVG from '../assets/svg/ship.svg';
import TrainSVG from '../assets/svg/train.svg';
import TaxiSVG from '../assets/svg/taxi.svg';
import BusSVG from '../assets/svg/bus.svg';
import AirplaneSVG from '../assets/svg/airplane.svg';
import TransportSVG from '../assets/svg/transport.svg';
import YoutubeSVG from '../assets/svg/youtube.svg';
import NetflixSVG from '../assets/svg/netflix.svg';
import SpotifySVG from '../assets/svg/spotify.svg';
import GameSVG from '../assets/svg/game.svg';

const PaymentScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: Color.colorPrimary,
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('MyQRCodeScreen')}>
          <QRSVG />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <Button
          buttonStyle={{backgroundColor: '#F7F6FF'}}
          icon={() => <ArrowBackSVG />}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{marginHorizontal: 40}}>
        <ImageBackground
          source={require('../assets/img/payment-bg.png')}
          resizeMode="cover"
          style={styles.ImageStyle}
        />
      </View>
      <ScrollView contentContainerStyle={styles.LowerView}>
        <View style={{marginTop: 35, marginHorizontal: 35}}>
          <Input
            containerStyle={styles.StyleContainer}
            inputContainerStyle={styles.Container}
            inputStyle={styles.SearchText}
            placeholder="Search Payment"
          />
        </View>
        <View style={{paddingTop: 32, marginHorizontal: 35}}>
          <Text style={styles.HeaderStyle}>Bill</Text>
        </View>
        <View style={styles.BillView}>
          <TouchableOpacity style={styles.ContainerStyle}>
            <InternetSVG />
            <Text style={styles.TextStyle}>Internet</Text>
          </TouchableOpacity>
          <View style={styles.ContainerStyle}>
            <EducationSVG />
            <Text style={styles.TextStyle}>Education</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <ElectricitySVG />
            <Text style={styles.TextStyle}>Electricity</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <PhoneSVG />
            <Text style={styles.TextStyle}>Phone</Text>
          </View>
        </View>
        <View style={styles.BillView2}>
          <View style={styles.ContainerStyle}>
            <CartSVG />
            <Text style={styles.TextStyle2}>Virtual {'\n'} Commerce</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <InsuranceSVG />
            <Text style={styles.TextStyle}>Insurance</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <PropertySVG />
            <Text style={styles.TextStyle}>Property</Text>
          </View>
        </View>
        <View style={{paddingTop: 32, marginHorizontal: 35}}>
          <Text style={styles.HeaderStyle}>Transportation</Text>
        </View>
        <View style={styles.BillView}>
          <View style={styles.ContainerStyle}>
            <Button buttonStyle={styles.ButtonStyle} icon={() => <ShipSVG />} />
            <Text style={styles.TextStyle}>Ship</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <Button
              buttonStyle={styles.ButtonStyle}
              icon={() => <TrainSVG />}
            />
            <Text style={styles.TextStyle}>Train</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <Button buttonStyle={styles.ButtonStyle} icon={() => <TaxiSVG />} />

            <Text style={styles.TextStyle}>Taxi</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <Button buttonStyle={styles.ButtonStyle} icon={() => <BusSVG />} />
            <Text style={styles.TextStyle}>Bus</Text>
          </View>
        </View>
        <View style={styles.TransportationView}>
          <View style={styles.ContainerStyle}>
            <Button
              buttonStyle={styles.ButtonStyle}
              icon={() => <AirplaneSVG />}
            />
            <Text style={styles.TextStyle}>Air Plane</Text>
          </View>
          <View style={styles.ContainerStyle}>
            <Button
              buttonStyle={styles.ButtonStyle}
              icon={() => <TransportSVG />}
            />
            <Text style={styles.TextStyle2}>Online {'\n'} Transport</Text>
          </View>
        </View>
        <View style={{paddingTop: 32, marginHorizontal: 35}}>
          <Text style={styles.HeaderStyle}>Entertainment</Text>
        </View>
        <View style={styles.BillView}>
          <TouchableOpacity style={styles.ContainerStyle}>
            <YoutubeSVG />
            <Text style={styles.TextStyle}>Youtube</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerStyle}>
            <NetflixSVG />
            <Text style={styles.TextStyle}>Netflix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerStyle}>
            <SpotifySVG />
            <Text style={styles.TextStyle}>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerStyle}>
            <GameSVG />
            <Text style={styles.TextStyle}>Game Voucher</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  ImageStyle: {
    height: 184,
    width: 288,
    backgroundColor: 'transparent',
  },
  LowerView: {
    backgroundColor: Color.colorSecondary,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 100,
  },
  StyleContainer: {
    marginBottom: -20,
    paddingBottom: 0,
  },
  Container: {
    backgroundColor: '#F2F2F3',
    borderRadius: 10,
    borderBottomWidth: 0,
    paddingHorizontal: 14,
    height: 32,
  },
  SearchText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#99989A',
    textAlign: 'center',
    lineHeight: 14.4,
  },
  BillView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 27,
    marginHorizontal: 20,
  },
  BillView2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    marginHorizontal: 20,
  },
  TransportationView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 30,
    paddingTop: 20,
  },
  ContainerStyle: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: Color.colorLabel,
  },
  TextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    lineHeight: 13.2,
    marginVertical: 9,
    color: Color.colorLabel,
  },
  TextStyle2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    lineHeight: 13.2,
    marginVertical: 9,
    color: Color.colorLabel,
    textAlign: 'center',
  },
  ButtonStyle: {
    backgroundColor: Color.colorSecondary,
    shadowColor: Color.colorSecondary,
  },
});
