import React from 'react';
import { View, StyleSheet } from 'react-native';

import LinkingButton from '../components/LinkingButton';

import UICondText from '../components/UICondText';

const LabelToButtonInline = (props) => {
  return (
    <View style={Styling.btnLabel}>
      <UICondText>{props.label}</UICondText>
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
    maxWidth: '100%',
  },
});

export default LabelToButtonInline;
