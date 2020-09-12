import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import * as Animatable from 'react-native-animatable';

const offlineScreen = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        ...Styling.container,
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
      }}
    >
      <View style={Styling.imgCnt}>
        <Animatable.Image
          source={require('../android/app/src/main/res/drawable/no_internet.png')}
          resizeMethod="scale"
          animation="jello"
          iterationCount={1}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ ...Styling.textStyle, color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 50 }}>
          Whoops !
        </Text>
        <Text style={{ ...Styling.textStyle, color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 20 }}>
          {'\n'} Looks like you're offline...
        </Text>
        <Text style={{ ...Styling.textStyle, color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 15 }}>
          {'\n'}I don't work without internet and you know that !
        </Text>
      </View>
      <StatusBar barStyle="light-content" backgroundColor="black" />
    </View>
  );
};

const Styling = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCnt: {
    flex: 1,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center',
  },
});

export default offlineScreen;
