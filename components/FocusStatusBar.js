import {View, Text} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const FocusStatusBar = props => {
  const isFoucsed = useIsFocused();
  return isFoucsed ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusStatusBar;
