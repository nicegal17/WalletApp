import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, ListItem} from 'react-native-elements';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

import Color from '../theme/Color';

import TopUpSVG from '../assets/svg/top-up-2.svg';
import ExchangeSVG from '../assets/svg/exchange.svg';
import WithdrawSVG from '../assets/svg/withdraw1.svg';
import DribbleSVG from '../assets/svg/dribble.svg';
import FiverSVG from '../assets/svg/err.svg';
import FigmaSVG from '../assets/svg/figma.svg';

const BalanceStatScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'My Balance',
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

  const data = [
    {quarter: 'Mar', earnings: '2K'},
    {quarter: 'Apr', earnings: '4K'},
    {quarter: 'May', earnings: '6K'},
    {quarter: 'Jun', earnings: '8K'},
    {quarter: 'Jul', earnings: '10K'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.SafeAreaView}>
      <View style={{marginRight: 36}}>
        {/* <View>
          <TopUpSVG />
        </View> */}
        <Text style={styles.TopUp}>Top Up</Text>
      </View>
      <View style={{marginHorizontal: 81, marginTop: 35}}>
        <Text style={styles.Balance}>$18, 543.00</Text>
      </View>
      <View style={{marginHorizontal: 128, marginTop: 7}}>
        <Text style={styles.BalanceText}>Total Balance</Text>
      </View>
      <View style={styles.ButtonView}>
        <Button
          title="Exchange"
          containerStyle={styles.ButtonContainer}
          buttonStyle={styles.ButtonStyle}
          titleStyle={styles.ButtonText}
          icon={() => <ExchangeSVG />}
        />
        <Button
          title="Withdraw"
          containerStyle={styles.ButtonContainer}
          buttonStyle={styles.ButtonStyle}
          titleStyle={styles.ButtonText}
          icon={() => <WithdrawSVG />}
        />
      </View>
      <View style={styles.Container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            style={{backgroundColor: 'red'}}
          />
        </VictoryChart>
      </View>
      <View style={styles.TextView}>
        <Text style={styles.Transaction}>Transaction</Text>
        <Text style={styles.SeeAll}>See All</Text>
      </View>
      <View style={{paddingTop: 21, marginHorizontal: 35}}>
        <ListItem>
          <FiverSVG />
          <ListItem.Content>
            <ListItem.Title style={styles.Title}>Fiver</ListItem.Title>
            <ListItem.Subtitle style={styles.SubTitle}>
              7 July 2021
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            Component={() => <Text style={styles.Amount}>$2599</Text>}
          />
        </ListItem>
        <ListItem>
          <FiverSVG />
          <ListItem.Content>
            <ListItem.Title style={styles.Title}>Figma</ListItem.Title>
            <ListItem.Subtitle style={styles.SubTitle}>
              7 July 2021
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            Component={() => <Text style={styles.Amount}>$2599</Text>}
          />
        </ListItem>
        <ListItem>
          <DribbleSVG />
          <ListItem.Content>
            <ListItem.Title style={styles.Title}>Dribble</ListItem.Title>
            <ListItem.Subtitle style={styles.SubTitle}>
              7 July 2021
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            Component={() => <Text style={styles.Amount}>$2599</Text>}
          />
        </ListItem>
      </View>
    </ScrollView>
  );
};

export default BalanceStatScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: Color.colorSecondary,
  },
  Balance: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    lineHeight: 43.2,
    color: Color.colorLabel,
  },
  BalanceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 35,
  },
  ButtonStyle: {
    backgroundColor: '#FDFDFD',
    width: 143,
    height: 48,
  },
  ButtonContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorLabel,
    marginHorizontal: 9,
  },
  TopUp: {
    fontFamily: 'Poppins-Medium',
    color: '#FDA325',
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: 'right',
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorWhiteBG,
    marginTop: 20,
    fontFamily: 'Poppins-Medium',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginHorizontal: 35,
  },
  Transaction: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: Color.colorLabel,
  },
  SeeAll: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
    color: Color.colorPrimary,
  },
  Title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 19.2,
    color: Color.colorLabel,
  },
  SubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    lineHeight: 10.8,
  },
  Amount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#6EADC0',
  },
});
