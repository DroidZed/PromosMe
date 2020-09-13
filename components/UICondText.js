import React from 'react';
import { Text } from 'react-native';
//Imported Libraries:
import { useColorScheme } from 'react-native-appearance';

const UICondText = (props) => {
  const colorScheme = useColorScheme();

  return <Text style={{ ...props.style, color: colorScheme === 'dark' ? 'white' : 'black' }}>{props.children}</Text>;
};

export default UICondText;
