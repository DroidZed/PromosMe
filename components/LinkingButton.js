import React from 'react';
import { Linking } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

const LinkedButton = (props) => {
  return (
    <Button style={props.style} onPress={() => Linking.openURL(props.where)}>
      {props.msg}
      <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
    </Button>
  );
};

export default LinkedButton;
