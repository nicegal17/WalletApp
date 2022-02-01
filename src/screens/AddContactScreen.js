import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Input} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';

import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import QRSVG from '../assets/svg/qr.svg';

const AddContactScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Add Contact',
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
      headerRight: () => (
        <TouchableOpacity>
          <QRSVG />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.ViewContainer}>
        <Input
          placeholder="Name of recipient"
          label="Name"
          containerStyle={styles.TextInputContainer}
          inputContainerStyle={styles.TextInput}
          labelStyle={styles.Label}
          inputStyle={styles.Input}
        />
        <Input
          placeholder="Email of recipient (optional)"
          label="Email"
          containerStyle={styles.TextInputContainer}
          inputContainerStyle={styles.TextInput}
          labelStyle={styles.Label}
          inputStyle={styles.Input}
        />
        <Dropdown
          style={styles.Dropdown}
          label="cxcxzc"
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.PlaceholderStyle}
          imageStyle={styles.imageStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={value}
          data={data}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Search..."
          onChange={e => {
            setValue(e.value);
          }}
        />
        <Dropdown
          style={styles.Dropdown}
          label="cxcxzc"
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.PlaceholderStyle}
          imageStyle={styles.imageStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={value}
          data={data}
          valueField="value"
          labelField="fdsfdsfdsf"
          imageField="image"
          placeholder="Select"
          searchPlaceholder="Search..."
          onChange={e => {
            setValue(e.value);
          }}
        />
        <Input
          placeholder="Account Number"
          label="Number"
          containerStyle={styles.TextInputContainer}
          inputContainerStyle={styles.TextInput}
          labelStyle={styles.Label}
          inputStyle={styles.Input}
        />
      </View>
      <View style={styles.ButtonView}>
        <Button
          title="Cancel"
          buttonStyle={[styles.ButtonCancel, styles.ButtonsWidth]}
          titleStyle={styles.CancelText}
          type="outline"
        />
        <Button
          title="Add"
          buttonStyle={[styles.ButtonAdd, styles.ButtonsWidth]}
          titleStyle={styles.AddText}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddContactScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  TextInputContainer: {
    marginVertical: 10,
  },
  TextInputContainer2: {
    width: 185,
  },
  TextInput: {
    borderBottomWidth: 0,
    borderRadius: 10,
    backgroundColor: Color.colorTextInput,
    marginTop: 15,
  },
  Label: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    lineHeight: 16.8,
    color: Color.colorLabel,
  },
  Input: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16.8,
    letterSpacing: 0,
    marginHorizontal: 30,
  },
  ViewContainer: {
    marginHorizontal: 25,
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ButtonAdd: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    height: 45,
  },
  ButtonCancel: {
    backgroundColor: Color.colorSecondary,
    borderColor: Color.colorPrimary,
    borderRadius: 15,
    height: 45,
  },
  CancelText: {
    color: Color.colorTextButton,
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 16.8,
  },
  ButtonsWidth: {
    width: 142,
  },
  Dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0,
    backgroundColor: Color.colorTextInput,
    borderRadius: 10,
  },
  PlaceholderStyle: {
    fontSize: 16,
    marginHorizontal: 30,
  },
});
