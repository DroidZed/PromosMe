/////////////////////////////////////////////////
/*
* This is a template file I used to quickly create
* components.
* don't forget to rename and import it.
*/
/////////////////////////////////////////////////


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const aComponent = (props) => {
  const [clicks, setClick] = useState(0);
  return (
    <View style={{...Styling.container,...props.style}}>
      <Text>HI</Text>
      <Button title="Click me !" onPress={() => setClick(clicks + 1)} />
      <Text>You clicked : {clicks}</Text>
    </View>
  );
};

const Styling = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default aComponent;
