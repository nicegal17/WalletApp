import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

import Color from '../theme/Color';

import ArrowBackSVG from '../assets/svg/arrow-back.svg';
import QRSVG from '../assets/svg/qr.svg';
import InfoSVG from '../assets/svg/info.svg';
import SecuritySVG from '../assets/svg/security-fill.svg';
import FAQSVG from '../assets/svg/faqs.svg';
import PencilSVG from '../assets/svg/write.svg';
import PeopleSVG from '../assets/svg/people.svg';
import CameraSVG from '../assets/svg/camera-1.svg';
import ContactSVG from '../assets/svg/contactavatar.svg';
import HeadsetSVG from '../assets/svg/headset.svg';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Profile',
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
        <TouchableOpacity onPress={() => navigation.navigate('MyQRCodeScreen')}>
          <QRSVG />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <View style={{paddingTop: 50}}>
          <View style={styles.ContactView}>
            <ContactSVG width={96} height={96} />
            <View style={styles.CameraView}>
              <CameraSVG />
            </View>
          </View>
          <View style={styles.ViewName}>
            <Text style={styles.Name}>Andrew Morison</Text>
          </View>
          <View style={styles.ViewPostion}>
            <Text style={styles.Position}>UI Designer</Text>
          </View>
        </View>
        <View style={styles.ListItem}>
          <ListItem bottomDivider>
            <InfoSVG />
            <ListItem.Content style={{paddingHorizontal: 8}}>
              <ListItem.Title style={styles.Title}>
                Personal data
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
          <ListItem bottomDivider>
            <SecuritySVG />
            <ListItem.Content style={{paddingHorizontal: 8}}>
              <ListItem.Title style={styles.Title}>Security</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content style={{paddingHorizontal: 35}}>
              <ListItem.Title style={styles.Title}>Notification</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
        </View>

        <View style={styles.ListItem2}>
          <ListItem bottomDivider>
            <FAQSVG />
            <ListItem.Content style={{paddingHorizontal: 8}}>
              <ListItem.Title style={styles.Title}>FAQs</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
          <ListItem bottomDivider>
            <PencilSVG />
            <ListItem.Content style={{paddingHorizontal: 8}}>
              <ListItem.Title style={styles.Title}>
                Our hand book
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
          <ListItem bottomDivider>
            <PeopleSVG />
            <ListItem.Content style={{paddingHorizontal: 8}}>
              <ListItem.Title style={styles.Title}>Community </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#9DA0C6" size={24} />
          </ListItem>
        </View>
        <View style={styles.Footer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <HeadsetSVG />
            <View style={{marginVertical: 10}}>
              <Text style={styles.FooterText}>
                Feel free to ask, We ready to help
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Color.colorSecondary,
  },
  ContactView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CameraView: {
    position: 'absolute',
    top: 32,
    left: 0,
    right: -65,
    alignItems: 'center',
  },
  ViewName: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24,
  },
  ViewPostion: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 21.6,
    color: Color.colorLabel,
  },
  Position: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 16.8,
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 16.8,
  },
  ListItem: {
    marginHorizontal: 42,
    marginTop: 30,
  },
  ListItem2: {
    marginHorizontal: 42,
    marginTop: 43,
    marginBottom: 24,
  },
  Footer: {
    backgroundColor: Color.purple,
    paddingHorizontal: 20,
    paddingVertical: 17,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  FooterText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    lineHeight: 14.4,
    color: Color.colorPrimary,
  },
});
