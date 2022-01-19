import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, ListItem} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

import {CARDS} from '../constants/data';

import WhiteVisaSVG from '../assets/svg/visa-white.svg';
import MasterCardSVG from '../assets/svg/master-card.svg';
import BlueVisaSVG from '../assets/svg/visa.svg';
import AddSVG from '../assets/svg/add.svg';

const MyWalletScreen = () => {
  const [imagesArr, setImagesArr] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setImagesArr(CARDS);
  }, []);

  const AddPayment = () => {
    navigation.navigate('AddPaymentScreen');
  };

  const OpenDetail = () => {
    navigation.navigate('DetailActivityScreen');
  };

  const renderItem = item => {
    return (
      <TouchableOpacity onPress={OpenDetail} activeOpacity={0.8}>
        <ImageBackground
          source={require('../assets/img/card.png')}
          style={styles.ImageStyle}
          resizeMode="cover">
          <View style={styles.ViewContainer}>
            <View style={styles.CardView}>
              <View>
                <Text style={styles.CardText}>Current Balance</Text>
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
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.MyWalletView}>
        <Text style={styles.MyWalletText}>My Wallet</Text>
      </View>
      <FlatList
        data={CARDS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.FlatList}
      />
      <View style={styles.ListItemView}>
        <View style={styles.OtherPaymentView}>
          <Text style={styles.OtherPaymentText}>Other payment method</Text>
        </View>
        <View>
          <ListItem containerStyle={styles.ListItem}>
            <MasterCardSVG />
            <ListItem.Content>
              <ListItem.Title style={styles.TitleStyle}>
                Master Card
              </ListItem.Title>
            </ListItem.Content>
            <RadioButton />
          </ListItem>
          <ListItem containerStyle={styles.ListItem}>
            <BlueVisaSVG />
            <ListItem.Content>
              <ListItem.Title style={styles.TitleStyle}>Visa</ListItem.Title>
            </ListItem.Content>
            <RadioButton />
          </ListItem>
          <Button
            title="Add Payment Method"
            buttonStyle={styles.AddButton}
            titleStyle={styles.AddButtonTitle}
            onPress={AddPayment}
            iconPosition="left"
            iconRight={false}
            icon={{
              Component: () => <AddSVG />,
              containerStyle: {
                position: 'absolute',
                left: 0,
                marginLeft: 22,
              },
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyWalletScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  ImageStyle: {
    height: 184,
    width: 325,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  ViewContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  MyWalletView: {
    padding: 20,
    marginHorizontal: 10,
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
  MyWalletText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0,
  },
  FlatList: {
    height: 185,
    flexGrow: 0,
    marginHorizontal: 25,
  },
  ListItemView: {
    marginHorizontal: 25,
  },
  ListItem: {
    marginVertical: 10,
    borderRadius: 15,
  },
  TitleStyle: {
    fontSize: 14,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    lineHeight: 19,
  },
  OtherPaymentText: {
    fontWeight: '800',
    fontSize: 16,
    fontFamily: 'Nunito Sans',
    lineHeight: 22,
  },
  OtherPaymentView: {
    padding: 20,
  },
  HeaderView: {
    padding: 10,
  },
  AddButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    height: 64,
  },
  AddButtonTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    color: '#3E3E3E',
  },
});
