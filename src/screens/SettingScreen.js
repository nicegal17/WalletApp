import {
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Input, ListItem} from 'react-native-elements';

import Color from '../theme/Color';
import {SETTINGS} from '../constants/data';

import PersonalSVG from '../assets/svg/personal-info.svg';
import SupportSVG from '../assets/svg/support.svg';
import AccountSVG from '../assets/svg/accounts.svg';
import PaymentSVG from '../assets/svg/payment-ref.svg';
import SecuritySVG from '../assets/svg/security.svg';
import LanguageSVG from '../assets/svg/language.svg';
import TermsSVG from '../assets/svg/terms.svg';
import SearchSVG from '../assets/svg/search.svg';

const SettingScreen = () => {
  const [SettingsArr, setSettingsArr] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Setting',
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 24,
      },
      headerStyle: {
        backgroundColor: Color.colorSecondary,
        marginVertical: 40,
      },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
    });
  });

  useEffect(() => {
    setSettingsArr(SETTINGS);
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.SearchView}>
        <Input
          containerStyle={styles.StyleContainer}
          inputContainerStyle={styles.Container}
          inputStyle={styles.SearchText}
          placeholder="Search Setting"
          leftIcon={SearchSVG}
          onChangeText={value => handleSearch(value)}
        />
      </View>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <View>
          <View style={styles.GroupView}>
            <Text style={styles.GroupText}>Profile</Text>
          </View>
          <View style={styles.ListItemView}>
            <ListItem onPress={() => navigation.navigate('ProfileStack')}>
              <PersonalSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Personal Information
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
            <ListItem>
              <SupportSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Support Center
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
          </View>
        </View>
        <View>
          <View style={styles.GroupView}>
            <Text style={styles.GroupText}>Bank Account</Text>
          </View>
          <View style={styles.ListItemView}>
            <ListItem>
              <AccountSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Account & Credit Card
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
            <ListItem>
              <PaymentSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Payment Reference
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
            <ListItem>
              <SecuritySVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>Security</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
          </View>
        </View>
        <View>
          <View style={styles.GroupView}>
            <Text style={styles.GroupText}>Other Setting</Text>
          </View>
          <View style={styles.ListItemView}>
            <ListItem>
              <LanguageSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>Language</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
            <ListItem>
              <TermsSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Terms & Condition
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#9DA0C6" />
            </ListItem>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  ScrollView: {
    flex: 1,
  },
  GroupView: {
    marginHorizontal: 35,
    paddingVertical: 20,
  },
  GroupText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: Color.colorLabel,
  },
  ListItemView: {
    marginHorizontal: 38,
  },
  Title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 16.8,
  },
  SearchView: {
    marginTop: 10,
    marginHorizontal: 25,
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
    lineHeight: 14.4,
    textAlign: 'center',
  },
});
