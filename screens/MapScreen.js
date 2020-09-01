import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MapScreen = (props) => {
  return (
    <View>
      <View>
        <Button title="Home" onPress={props.navHome} />
        <Button title="Map" onPress={props.navMap} />
      </View>
    </View>
  );
};

const Styling = StyleSheet.create({});

export default MapScreen;
