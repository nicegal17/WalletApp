import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import CardImage from '../../assets/img/card.png';

const CardItem = () => {
  return (
    <View>
      <FastImage
        source={{uri: CardImage, priority: FastImage.priority.normal}}
        style={styles.ImageStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  ImageStyle: {
    height: 350,
    width: '100%',
  },
});
