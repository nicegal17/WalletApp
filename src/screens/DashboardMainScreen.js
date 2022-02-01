import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import SideBarSVG from '../assets/svg/sidebar.svg';
import CircleSVG from '../assets/svg/contactavatar.svg';
import NotificationSVG from '../assets/svg/notification.svg';
import CardLogoSVG from '../assets/svg/card-logo.svg';
import VisaSVG from '../assets/svg/visa.svg';
import ContactAvatarSVG from '../assets/svg/contactavatar.svg';
import TopUpSVG from '../assets/svg/top-up.svg';
import TransferSVG from '../assets/svg/transfer.svg';
import PaySVG from '../assets/svg/bill.svg';
import DribbleSVG from '../assets/svg/dribble.svg';
import FiverSVG from '../assets/svg/err.svg';
import FigmaSVG from '../assets/svg/figma.svg';

import {CARDS} from '../constants/data';
import Color from '../theme/Color';
import {ListItem} from 'react-native-elements';

const DashboardMainScreen = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerStyle: {
        backgroundColor: Color.purple,
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SideBarSVG />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.HeaderStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CircleSVG width={32} height={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <NotificationSVG />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  useEffect(() => {
    setCards(CARDS);
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

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={styles.UpperView}>
          <FlatList
            data={CARDS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={styles.FlatList}
          />
        </View>
        <View style={styles.LowerView}>
          <View style={styles.QuickViewContainer}>
            <View style={styles.QuickView}>
              <View style={styles.QuickViewItem}>
                <TopUpSVG />
                <Text style={styles.QuickViewText}>Top Up</Text>
              </View>
              <TouchableOpacity
                style={styles.QuickViewItem}
                onPress={() => navigation.navigate('TransferScreen')}>
                <TransferSVG />
                <Text style={styles.QuickViewText}>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.QuickViewItem}
                onPress={() => navigation.navigate('PaymentScreen')}>
                <PaySVG />
                <Text style={styles.QuickViewText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.YourContactContainer}>
            <View style={styles.YourContactContainerHeader}>
              <Text style={styles.YourContactText}>Your Contact</Text>
              <Text style={styles.SeeAllText}>See All</Text>
            </View>
            <View style={styles.YourContactContainerList}>
              <View style={styles.ContactView}>
                <ContactAvatarSVG />
                <View style={styles.ContactNameView}>
                  <Text style={styles.ContactName}>Jose Hulk</Text>
                </View>
              </View>
              <View style={styles.ContactView}>
                <ContactAvatarSVG />
                <View style={styles.ContactNameView}>
                  <Text style={styles.ContactName}>Richard Jr.</Text>
                </View>
              </View>
              <View style={styles.ContactView}>
                <ContactAvatarSVG />
                <View style={styles.ContactNameView}>
                  <Text style={styles.ContactName}>Thor Walter</Text>
                </View>
              </View>
              <View style={styles.ContactView}>
                <ContactAvatarSVG />
                <View style={styles.ContactNameView}>
                  <Text style={styles.ContactName}>Kamila Bill</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.RecentView}>
            <View style={{marginTop: -50}}>
              <Text style={styles.YourContactText}>Recent</Text>
            </View>
            <View>
              <ListItem>
                <DribbleSVG />
                <ListItem.Content>
                  <ListItem.Title style={styles.RecentTitle}>
                    Dribble
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.RecentSubTitle}>
                    7 July 2021
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                  Component={() => <Text style={styles.Amount}>$1.199</Text>}
                />
              </ListItem>
              <ListItem>
                <FiverSVG />
                <ListItem.Content>
                  <ListItem.Title style={styles.RecentTitle}>
                    Fiver
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.RecentSubTitle}>
                    7 July 2021
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                  Component={() => <Text style={styles.Amount}>$1.199</Text>}
                />
              </ListItem>
              <ListItem>
                <FigmaSVG />
                <ListItem.Content>
                  <ListItem.Title style={styles.RecentTitle}>
                    Figma
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.RecentSubTitle}>
                    7 July 2021
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                  Component={() => <Text style={styles.Amount}>$1.199</Text>}
                />
              </ListItem>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardMainScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.purple,
  },
  RecentView: {
    flex: 1,
    marginStart: 40,
    marginEnd: 19,
    paddingTop: 30,
  },
  ScrollView: {
    flex: 1,
  },
  UpperView: {
    backgroundColor: Color.purple,
    height: 250,
  },
  LowerView: {
    backgroundColor: '#FCFCFC',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'relative',
    flex: 1,
    marginTop: 32,
  },
  FlatList: {
    height: 185,
    flexGrow: 0,
    marginHorizontal: 25,
    marginTop: 20,
  },
  ImageStyle: {
    height: 184,
    width: 325,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  HeaderStyle: {
    flexDirection: 'row',
  },
  HeaderView: {
    marginHorizontal: 260,
    marginVertical: 21,
  },
  FooterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 70,
    marginTop: 30,
  },
  CardNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
    color: '#F8F0E9',
    letterSpacing: 1,
  },
  MiddleView: {
    marginHorizontal: 70,
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
  QuickViewContainer: {
    position: 'absolute',
    top: -35,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  QuickView: {
    backgroundColor: '#FCFCFC',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 19,
    paddingVertical: 12,
    width: 238,
    shadowColor: '#6D542F',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 3,
  },
  QuickViewItem: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  QuickViewText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 14.4,
    marginVertical: 9,
  },
  YourContactContainer: {
    marginTop: 100,
    marginStart: 35,
    marginEnd: 19,
    flex: 1,
  },
  YourContactContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  YourContactContainerList: {
    flexDirection: 'row',
    marginVertical: 27,
  },
  YourContactText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 21.6,
    color: Color.colorLabel,
  },
  SeeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorPrimary,
  },
  ContactNameView: {
    marginVertical: 10,
  },
  ContactName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    lineHeight: 13.2,
  },
  RecentTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  RecentSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
  },
  ContactView: {
    marginHorizontal: 13,
  },
  Amount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#E25779',
  },
});
