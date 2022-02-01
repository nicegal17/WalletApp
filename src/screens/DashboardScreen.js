import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {} from 'react-native-safe-area-context';

import PiggySVG from '../assets/svg/piggy.svg';
import {Button} from 'react-native-elements';
import Color from '../theme/Color';
import {useNavigation} from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const GetStarted = () => {
    navigation.navigate('RootStack');
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.UpperView}>
        <PiggySVG />
      </View>
      <View style={styles.LowerView}>
        <View style={styles.TextView}>
          <Text style={styles.Title}>Manage Your {'\n'} Own Money</Text>
          <Text style={styles.TextBody}>
            Improve your financial {'\n'} management, manage your income {'\n'}{' '}
            and living expenses easy and quickly
          </Text>
        </View>
        <View style={styles.ButtonView}>
          <Button
            title="Get Started"
            buttonStyle={styles.Button}
            titleStyle={styles.ButtonTitle}
            containerStyle={styles.ButtonContainer}
            onPress={GetStarted}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  UpperView: {
    flex: 1,
    backgroundColor: Color.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LowerView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  TextView: {
    flex: 1,
    marginHorizontal: 70,
    marginTop: 76,
    alignItems: 'center',
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.5,
    color: Color.fontColor,
    textAlign: 'center',
    marginBottom: 27,
  },
  TextBody: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0.5,
    opacity: 100,
    color: '#2F253D',
    textAlign: 'center',
  },
  ButtonView: {
    marginVertical: 48,
  },
  ButtonContainer: {
    alignItems: 'center',
  },
  Button: {
    backgroundColor: Color.colorPrimary,
    height: 59,
    borderRadius: 15,
    width: 235,
  },
  ButtonTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    opacity: 100,
  },
});
