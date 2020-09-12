import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LinkingButton from '../components/LinkingButton';
import { useColorScheme } from 'react-native-appearance';

const LabelToButtonInline = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={Styling.btnLabel}>
      <Text style={{ color: colorScheme === 'light' ? 'black' : 'white' }}>{props.label}</Text>
      <LinkingButton
        style={Styling.btn}
        where={props.where}
        name={props.name}
        size={props.size}
        color={props.color}
        msg=""
      />
    </View>
  );
};

const Styling = StyleSheet.create({
  btnLabel: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    maxWidth:'100%'
  },
});

export default LabelToButtonInline;
