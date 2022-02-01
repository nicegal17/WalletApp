import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow-back-white.svg';

const MyQRCodeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'My QR Code',
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 24,
        color: Color.colorSecondary,
      },
      headerStyle: {
        backgroundColor: Color.colorPrimary,
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
      <View>
        <View style={styles.ImageView}>
          <ImageBackground
            source={require('../assets/img/Barcode.png')}
            resizeMode="cover"
            style={styles.ImageStyle}
          />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.Name}>Andrew Morison</Text>
        </View>
        <View style={styles.ScanView}>
          <Text style={styles.ScanText}>Scan to pay @And.won</Text>
        </View>
        <View style={styles.IntersectView}>
          <ImageBackground
            source={require('../assets/img/Intersect.png')}
            resizeMode="cover"
            style={styles.IntersectStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyQRCodeScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
  },
  ImageView: {
    marginHorizontal: 33,
    marginTop: 20,
  },
  ImageStyle: {
    height: 380,
    width: 310,
    backgroundColor: 'transparent',
  },
  IntersectView: {
    marginBottom: 100,
  },
  IntersectStyle: {
    height: 696,
    width: 300,
  },
  Name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 21.6,
    color: Color.colorSecondary,
  },
  TextView: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ScanView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ScanText: {
    color: Color.purple,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeigh: 14.4,
  },
});
