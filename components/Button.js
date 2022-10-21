import {View, Text, TouchableOpacity, Image} from 'react-native';
import {assets, COLORS, SHADOWS, SIZES} from '../constants';
import React from 'react';

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  //console.log('ha', props.right);
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};
export const RctButton = ({minWidth, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,

        borderRadius: SIZES.extraLarge,

        minWidth: minWidth,
        padding: SIZES.small,

        ...props,
      }}
      onPress={handlePress}>
      <Text style={{color: COLORS.white, textAlign: 'center'}}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
