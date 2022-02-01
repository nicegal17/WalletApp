import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

import TopUpSVG from '../assets/svg/top-up.svg';
import TransferSVG from '../assets/svg/transfer.svg';
import WithdrawSVG from '../assets/svg/withdraw.svg';
import BillSVG from '../assets/svg/bill.svg';
import RecieveSVG from '../assets/svg/recieve.svg';
import DribbleSVG from '../assets/svg/dribble.svg';
import CameraSVG from '../assets/svg/camera.svg';
import FigmaSVG from '../assets/svg/figma.svg';
import AdobeSVG from '../assets/svg/adobe.svg';

const HistoryScreen = () => {
  const navigation = useNavigation();
  const [TopUpExpanded, setTopUpExpanded] = useState(false);
  const [TransferExpanded, setTransferExpanded] = useState(false);
  const [BillExpanded, setBillExpanded] = useState(false);
  const [WithdrawExpanded, setWithdrawExpanded] = useState(false);
  const [RecieveExpanded, setRecieveExpanded] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'History',
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 24,
      },
      headerStyle: {
        backgroundColor: '#FCFCFB',
      },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="default" />
      <View style={styles.ContainerView}>
        <ListItem.Accordion
          containerStyle={styles.ListItem}
          content={
            <>
              <TopUpSVG />
              <ListItem.Content style={styles.ContentView}>
                <ListItem.Title style={styles.Title}>Top Up</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={TopUpExpanded}
        />
        <ListItem.Accordion
          onPress={() => navigation.navigate('TransferScreen')}
          containerStyle={styles.ListItem}
          content={
            <>
              <TransferSVG />
              <ListItem.Content style={styles.ContentView}>
                <ListItem.Title style={styles.Title}>Transfer</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={TransferExpanded}
        />
        <ListItem.Accordion
          containerStyle={styles.ListItem}
          content={
            <>
              <BillSVG />
              <ListItem.Content style={styles.ContentView}>
                <ListItem.Title style={styles.Title}>Bill</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={BillExpanded}
          onPress={() => {
            setBillExpanded(!BillExpanded);
          }}>
          <View style={styles.ExpandedView}>
            <ListItem>
              <DribbleSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.DropdownTitle}>
                  Dribble
                </ListItem.Title>
                <ListItem.Subtitle style={styles.DropdownSubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => <Text style={styles.Amount}>$19</Text>}
              />
            </ListItem>
            <ListItem>
              <CameraSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.DropdownTitle}>
                  Camera Rig
                </ListItem.Title>
                <ListItem.Subtitle style={styles.DropdownSubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => <Text style={styles.Amount}>$1.99</Text>}
              />
            </ListItem>
            <ListItem>
              <FigmaSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.DropdownTitle}>
                  Figma
                </ListItem.Title>
                <ListItem.Subtitle style={styles.DropdownSubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => <Text style={styles.Amount}>$12</Text>}
              />
            </ListItem>
            <ListItem>
              <AdobeSVG />
              <ListItem.Content>
                <ListItem.Title style={styles.DropdownTitle}>
                  Adobe
                </ListItem.Title>
                <ListItem.Subtitle style={styles.DropdownSubTitle}>
                  7 July 2021
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron
                Component={() => <Text style={styles.Amount}>$1.199</Text>}
              />
            </ListItem>
          </View>
        </ListItem.Accordion>
        <ListItem.Accordion
          containerStyle={styles.ListItem}
          content={
            <>
              <WithdrawSVG />
              <ListItem.Content style={styles.ContentView}>
                <ListItem.Title style={styles.Title}>Withdraw</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={WithdrawExpanded}
        />
        <ListItem.Accordion
          containerStyle={styles.ListItem}
          content={
            <>
              <RecieveSVG />
              <ListItem.Content style={styles.ContentView}>
                <ListItem.Title style={styles.Title}>Recieve</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={RecieveExpanded}
        />
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#FCFCFB',
  },
  ContainerView: {
    marginVertical: 48,
  },
  ContentView: {
    marginHorizontal: 30,
  },
  ListItem: {
    marginVertical: 7,
    marginHorizontal: 35,
    borderRadius: 15,
    backgroundColor: '#FDFDFD',
    shadowColor: '#676097',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 3,
  },
  Title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  DropdownTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  DropdownSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 12,
  },
  ExpandedView: {
    marginHorizontal: 74,
    backgroundColor: '#FDFDFD',
  },
  Amount: {
    color: '#E25779',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 19.2,
  },
});
