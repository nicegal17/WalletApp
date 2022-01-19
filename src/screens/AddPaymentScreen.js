import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import MasterCardSVG from '../assets/svg/master-card.svg';
import BackButtonSVG from '../assets/svg/arrow-back.svg';

const AddPaymentScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#FAFAFA',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButtonSVG />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={styles.AddPaymentView}>
          <Text style={styles.AddPaymentText}>Add payment method</Text>
        </View>
        <View style={styles.ViewContainer}>
          <Input
            placeholder="Kiita Valezka"
            label="Name on card"
            containerStyle={styles.TextInputContainer}
            inputContainerStyle={styles.TextInput}
            labelStyle={styles.Label}
            inputStyle={styles.Input}
          />
          <Input
            placeholder="5493 8374 9283 0126"
            label="Card number"
            containerStyle={styles.TextInputContainer}
            inputContainerStyle={styles.TextInput}
            labelStyle={styles.Label}
            inputStyle={styles.Input}
            rightIcon={<MasterCardSVG />}
          />
          <View style={styles.Expiration}>
            <Input
              placeholder="09/10"
              label="Expiration"
              containerStyle={[
                styles.TextInputContainer,
                styles.TextInputContainer2,
              ]}
              inputContainerStyle={styles.TextInput}
              labelStyle={styles.Label}
              inputStyle={styles.Input}
            />
            <Input
              placeholder="426"
              label="Cvv"
              containerStyle={[
                styles.TextInputContainer,
                styles.TextInputContainer2,
              ]}
              inputContainerStyle={styles.TextInput}
              labelStyle={styles.Label}
              inputStyle={styles.Input}
            />
          </View>
          <Input
            placeholder="498384"
            label="Postal code"
            containerStyle={styles.TextInputContainer}
            inputContainerStyle={styles.TextInput}
            labelStyle={styles.Label}
            inputStyle={styles.Input}
          />
          <Button
            title="Add card"
            buttonStyle={styles.AddButton}
            titleStyle={styles.AddButtonTitle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPaymentScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  TextInputContainer: {
    marginVertical: 10,
  },
  TextInputContainer2: {
    width: 185,
  },
  TextInput: {
    borderBottomWidth: 0,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
  ViewContainer: {
    marginHorizontal: 25,
  },
  Label: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 25,
  },
  Input: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0,
  },
  Expiration: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  AddButton: {
    backgroundColor: '#5486E9',
    borderRadius: 17,
    height: 55,
    width: 325,
  },
  AddButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#FFFFFF',
  },
  AddPaymentView: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  AddPaymentText: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0,
  },
});
