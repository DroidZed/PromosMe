import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Color Palette:
import Colors from '../constants/Colors';

const Header = (props) => {
  return (
    <View style={{...Styling.header,...props.style}}>
      <Text style={Styling.hdrText}>{props.title}</Text>
    </View>
  );
};

const Styling = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hdrText: {
    color: Colors.headerText,
    fontSize: 40,
    fontWeight: '400',
  },
});

export default Header;
