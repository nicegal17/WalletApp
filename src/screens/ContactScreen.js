import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Input, ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';

import {CONTACTS} from '../constants/data';
import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import AddContactSVG from '../assets/svg/add-contact.svg';

const ContactScreen = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();

  const AddContact = () => {
    navigation.navigate('AddContactScreen');
  };

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Contact',
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
        <TouchableOpacity onPress={AddContact}>
          <AddContactSVG />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  const renderItem = ({item}) => {
    console.log('item: ', item)
    return (
      <ListItem>
        <Avatar rounded source={item.image} />
        <ListItem.Content>
          <ListItem.Title style={styles.Title}>{item.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.Subtitle}>
            {item.number}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.SearhView}>
        <Input
          containerStyle={styles.StyleContainer}
          inputContainerStyle={styles.Container}
          inputStyle={styles.SearchText}
          placeholder="Name or Email"
          //   leftIcon={{
          //     type: 'feather',
          //     name: 'search',
          //     color: '#B7B7B7',
          //     size: 25,
          //   }}
          onChangeText={value => handleSearch(value)}
        />
      </View>
      <ScrollView>
        <FlatList
          data={CONTACTS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.FlatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  FlatList: {
    marginHorizontal: 22,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
  },
  Subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 14.4,
    color: Color.gray,
  },
  SearchView: {
    marginTop: 10,
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
});
