import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Color from '../theme/Color';
import {Button} from 'react-native-elements';

const TransferSuccessScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.ImageView}>
        <ImageBackground
          source={require('../assets/img/success.png')}
          resizeMode="cover"
          style={styles.ImageStyle}
        />
      </View>
      <View style={styles.TransferView}>
        <Text style={styles.TransferTitle}>Transfer Success</Text>
        <View style={styles.TransferTextView}>
          <Text style={styles.TransferText}>
            Your transfer has been successful, Your {'\n'} Transfer receipt has
            been sent to your {'\n'} E-mail
          </Text>
        </View>
      </View>
      <View style={styles.ButtonView}>
        <Button
          title="Back to Home"
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransferSuccessScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  ImageView: {
    marginVertical: 100,
  },
  ImageStyle: {
    height: 260,
    width: 305,
    marginHorizontal: 35,
    backgroundColor: 'transparent',
  },
  TransferView: {
    marginHorizontal: 73,
  },
  TransferTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#2F253D',
  },
  TransferTextView: {
    marginVertical: 24,
    justifyContent: 'center',
  },
  TransferText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 14.4,
    color: '#2F253D',
  },
  ButtonView: {
    marginHorizontal: 42,
    marginVertical: 40,
  },
  Button: {
    backgroundColor: Color.colorPrimary,
    width: 305,
    height: 59,
    borderRadius: 15,
  },
  ButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 16.8,
  },
});
