import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Color from '../theme/Color';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon} from 'react-native-elements';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import CardLogoSVG from '../assets/svg/card-logo.svg';
import VisaSVG from '../assets/svg/visa.svg';
import CardSVG from '../assets/svg/request-card.svg';
import LimitSVG from '../assets/svg/limit.svg';
import ChangePinSVG from '../assets/svg/change-pin.svg';
import BlockUnlockSVG from '../assets/svg/block-unlock.svg';

import {CARDS, EXCHANGE_RATE} from '../constants/data';

const MyCardScreen = () => {
  const navigation = useNavigation();
  const [MyCards, setMyCards] = useState([]);
  const [Rate, setRate] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'My Card             ',
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
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    setMyCards(CARDS);
    setRate(EXCHANGE_RATE);
  }, []);

  const renderItem = () => {
    return (
      <View style={styles.ImageStyle}>
        <View style={styles.HeaderView}>
          <CardLogoSVG width={43} height={26} />
        </View>
        <View style={styles.MiddleView}>
          <Text style={styles.BalanceText}>Balance</Text>
          <Text style={styles.BalanceAmount}>$2, 543.00</Text>
        </View>
        <View style={styles.FooterView}>
          <Text style={styles.CardNumber}>4682 7896 8995 7865</Text>
          <VisaSVG />
        </View>
      </View>
    );
  };

  const exchangeRate = ({item}) => {
    console.log('item: ', item);
    return (
      <View>
        <ListItem>
          <Icon name={item.imageIcon} />
          <ListItem.Content>
            <ListItem.Title>{item.currency}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View>
          <FlatList
            data={CARDS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={styles.FlatList}
          />
        </View>
        <View style={styles.ExchangeRateView}>
          <View style={styles.TextView}>
            <Text style={styles.GroupText}>Exchange Rate</Text>
            <Text style={styles.SeeAllText}>See All</Text>
          </View>
          <View>
            <FlatList
              data={EXCHANGE_RATE}
              renderItem={exchangeRate}
              keyExtractor={item => item.id}
              style={styles.FlatList}
            />
          </View>
        </View>
        <View style={styles.CardMgtView}>
          <Text style={styles.GroupText}>Card Management</Text>
          <View>
            <ListItem>
              <CardSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Request Card
                </ListItem.Title>
                <ListItem.Subtitle style={styles.SubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => (
                  <Icon
                    name="ellipsis-vertical"
                    type="ionicon"
                    color="#C4C4C4"
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <LimitSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Change Limit
                </ListItem.Title>
                <ListItem.Subtitle style={styles.SubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => (
                  <Icon
                    name="ellipsis-vertical"
                    type="ionicon"
                    color="#C4C4C4"
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <ChangePinSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>Change Pin</ListItem.Title>
                <ListItem.Subtitle style={styles.SubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => (
                  <Icon
                    name="ellipsis-vertical"
                    type="ionicon"
                    color="#C4C4C4"
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <BlockUnlockSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.Title}>
                  Block & Unlock
                </ListItem.Title>
                <ListItem.Subtitle style={styles.SubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => (
                  <Icon
                    name="ellipsis-vertical"
                    type="ionicon"
                    color="#C4C4C4"
                  />
                )}
              />
            </ListItem>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCardScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  ImageStyle: {
    height: 184,
    width: 325,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  HeaderView: {
    marginHorizontal: 260,
    marginVertical: 21,
  },
  MiddleView: {
    marginHorizontal: 70,
  },
  FooterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 70,
    marginTop: 30,
  },
  BalanceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#F8F0E9',
    lineHeight: 14.4,
    letterSpacing: 1,
  },
  BalanceAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#F8F0E9',
    letterSpacing: 1,
  },
  CardNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
    color: '#F8F0E9',
    letterSpacing: 1,
  },
  ExchangeRateView: {
    marginVertical: 60,
    marginHorizontal: 34,
  },
  GroupText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: Color.colorLabel,
  },
  SeeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: Color.colorPrimary,
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardMgtView: {
    marginVertical: 32,
    marginHorizontal: 34,
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    lineHeight: 16.8,
    fontSize: 14,
  },
  SubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
  },
});
