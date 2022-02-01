import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button, Input, ListItem} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

import Color from '../theme/Color';
import {CONTACTS} from '../constants/data';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import AddContactSVG from '../assets/svg/add-contact.svg';
import SearchSVG from '../assets/svg/search.svg';

const TransferScreen = () => {
  const navigation = useNavigation();
  const [Contacts, setContacts] = useState([]);

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
      headerRight: () => (
        <TouchableOpacity>{<AddContactSVG />}</TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem>
        <Avatar rounded source={item.image} size={55} />
        <ListItem.Content>
          <ListItem.Title style={styles.Title}>{item.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.Subtitle}>
            {item.number}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron Component={() => <RadioButton />} />
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.SearchView}>
        <Input
          containerStyle={styles.StyleContainer}
          inputContainerStyle={styles.Container}
          inputStyle={styles.SearchText}
          placeholder="Name or Email"
          leftIcon={SearchSVG}
          onChangeText={value => handleSearch(value)}
        />
      </View>
      <FlatList
        data={CONTACTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.FlatList}
      />
      <View style={styles.ButtonView}>
        <View style={{paddingTop: 22}}>
          <Button
            title="Select Contact"
            buttonStyle={styles.Button}
            titleStyle={styles.ButtonText}
            onPress={() => navigation.navigate('TransferAmountScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  SearchView: {
    marginTop: 10,
    marginHorizontal: 36,
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
    color: '#B7B7B7',
    textAlign: 'center',
  },
  FlatList: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
  },
  Subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 14.4,
  },
  ButtonView: {
    paddingHorizontal: 35,
    height: 170,
    backgroundColor: '#FCFCFC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  Button: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    height: 59,
  },
});
