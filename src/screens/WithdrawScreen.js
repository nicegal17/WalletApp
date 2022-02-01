import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, ListItem} from 'react-native-elements';

import Color from '../theme/Color';
import {ACCOUNTS} from '../constants/data';
import {RadioButton} from 'react-native-paper';

const WithdrawScreen = () => {
  const navigation = useNavigation();
  const [Accounts, setAccounts] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Withdraw',
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
    });
  });

  useEffect(() => {
    setAccounts(ACCOUNTS);
  }, []);

  const renderItem = ({item}) => {
    return (
      <ListItem>
        {item.icon}
        <ListItem.Content>
          <ListItem.Title style={styles.Title}>{item.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.Subtitle}>
            {item.account}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron Component={() => <RadioButton />} />
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={{flex: 1}}>
        <View style={styles.WithdrawView}>
          <Text style={styles.WithdrawAmt}>$600.00</Text>
        </View>
        <View style={styles.TotalView}>
          <Text style={styles.TotalBalances}>
            Your Total Balance {'\n'} $2,543.00
          </Text>
        </View>
        <View style={styles.AccountView}>
          <Text style={styles.AccountText}>Choose Account</Text>
          <View style={{paddingTop: 20}}>
            <FlatList
              data={ACCOUNTS}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={styles.FlatList}
            />
          </View>
        </View>
        <View style={styles.ButtonView}>
          <Button
            title="Withdraw"
            buttonStyle={styles.Button}
            titleStyle={styles.ButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorWhiteBG,
  },
  WithdrawView: {
    marginTop: 63,
    alignItems: 'center',
  },
  WithdrawAmt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    lineHeight: 43.2,
    color: Color.colorLabel,
  },
  TotalView: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TotalBalances: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#A092B3',
    textAlign: 'center',
  },
  AccountView: {
    marginTop: 60,
    marginHorizontal: 36,
    flex: 1,
  },
  AccountText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: Color.colorLabel,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
  },
  Subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
    padding: 3,
  },
  ButtonView: {
    marginHorizontal: 42,
    marginVertical: 54,
  },
  Button: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    height: 59,
  },
  ButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorSecondary,
  },
});
