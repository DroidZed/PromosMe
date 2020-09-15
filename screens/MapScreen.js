import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

//Imported Libraries
import MapboxGL, { MapView, Camera, UserLocation } from '@react-native-mapbox-gl/maps';
import { useColorScheme } from 'react-native-appearance';
import RNLocation from 'react-native-location';

//Custom Components:
import Header from '../components/Header';
import FocusAwareStatusBar from '../components/FocusAware';

//Color Palette:
import Colors from '../constants/Colors';

MapboxGL.setAccessToken('sk.eyJ1IjoiZHJvaWR6ZWQiLCJhIjoiY2tld3VoeXBiMDRwYTJxbjFodnZreTUydCJ9.9YtXrG1a6FJMijKawrZMMA');
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);

const MapScreen = () => {
  const colorScheme = useColorScheme();

  const clawLocation = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });

    RNLocation.requestPermission({
      android: {
        detail: 'fine',
      },
    }).then((granted) => {
      if (granted) {
        RNLocation.subscribeToLocationUpdates();
      }
    });
  };

  useEffect(() => clawLocation());

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
        <Header title="Map" style={{ backgroundColor: Colors.mapHeader }} />
        <View style={{ ...Styling.container, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
          <MapView
            style={Styling.map}
            compassEnabled={true}
            compassEnabled={true}
            styleURL={
              colorScheme === 'dark'
                ? 'mapbox://styles/droidzed/ckewxui2c171z1ao9fy85mk6o'
                : 'mapbox://styles/droidzed/ckewxpuy40mla19pbmvzp2bp8'
            }
          >
            <Camera zoomLevel={15} followUserLocation={true} />
            <UserLocation
              animated={true}
              androidRenderMode="compass"
              visible={true}
              showsUserHeadingIndicator={true}
              minDisplacement={5}
            />
          </MapView>
        </View>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={Colors.mapBar} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Styling = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
