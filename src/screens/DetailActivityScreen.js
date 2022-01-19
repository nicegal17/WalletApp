import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import ArrowUPSVG from '../assets/svg/arrow-up.svg';
import ArrowDownSVG from '../assets/svg/arrow-down.svg';
import WhiteVisaSVG from '../assets/svg/visa-white.svg';
import BackButtonSVG from '../assets/svg/arrow-back.svg';

const DetailActivityScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerStyle: {
        backgroundColor: '#FAFAFA',
      },
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButtonSVG />
        </TouchableOpacity>
      ),
    });
  });

  const transactions = [
    {
      id: 0,
      date: '22 May 2021',
      desc: 'Ocazte payment for hotel',
      amount: '- $200',
    },
    {
      id: 1,
      date: '22 May 2021',
      desc: 'Cashback 50% from Ocazte',
      amount: '+ $34',
    },
    {
      id: 2,
      date: '4 April 2021',
      desc: 'Ocazte payment for hotel',
      amount: '- $234',
    },
    {
      id: 3,
      date: '2 February 2021',
      desc: 'Ocazte payment for hotel',
      amount: '- $479',
    },
    {
      id: 4,
      date: '2 February 2021',
      desc: 'Cashback 50% from Ocazte',
      amount: '+ $22',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <ListItem containerStyle={styles.ListItem}>
        <ArrowDownSVG />
        <ListItem.Content>
          <ListItem.Title style={styles.TitleStyle}>{item.date}</ListItem.Title>
          <ListItem.Subtitle style={styles.Subtitle}>
            {item.desc}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Text style={styles.Subtitle}>{item.amount}</Text>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.DetailActivityView}>
        <Text style={styles.DetailActivityText}>Detail Activity</Text>
      </View>
      <View style={styles.ImageView}>
        <ImageBackground
          source={require('../assets/img/detail-card.png')}
          style={styles.ImageStyle}
          resizeMode="cover">
          <View style={styles.ViewContainer}>
            <View style={styles.CardView}>
              <View>
                <Text style={styles.Balance}>$5,750</Text>
              </View>
              <WhiteVisaSVG />
            </View>
            <View style={styles.CardView}>
              <Text style={styles.CardText}>5282 3456 7890 1289</Text>
              <Text style={styles.CardText}>06/30</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.ListItemView}>
        <View style={styles.RecentTextView}>
          <Text style={styles.RecentText}>Recent Transaction</Text>
          <Text>See All</Text>
        </View>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        style={styles.FlatList}
      />
    </SafeAreaView>
  );
};

export default DetailActivityScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  ImageView: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  ImageStyle: {
    height: 108,
    width: 325,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  ViewContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  CardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Cera Pro',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#FFFFFF',
  },
  Balance: {
    fontSize: 28,
    fontFamily: 'Cera Pro',
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 37,
    letterSpacing: 0,
  },
  RecentTextView: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RecentText: {
    fontSize: 16,
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    lineHeight: 22,
  },
  ListItemView: {
    marginHorizontal: 25,
  },
  ListItem: {
    marginVertical: 10,
    borderRadius: 15,
  },
  TitleStyle: {
    fontFamily: 'Nunito Sans',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  Subtitle: {
    fontFamily: 'Nunito Sans',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
  },
  DetailActivityView: {
    padding: 5,
    marginHorizontal: 25,
  },
  DetailActivityText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0,
  },
  FlatList: {
    marginHorizontal: 25,
  },
});
