import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

//custom components:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';

function homeScreen({ navigation }) {
  return <HomeScreen navMap={() => navigation.push('Map')} navHome={() => navigation.navigate('Home')} />;
}

function mapScreen({ navigation }) {
  return <MapScreen navMap={() => navigation.navigate('Map')} navHome={() => navigation.navigate('Home')} />;
}

const Stack = createStackNavigator();

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Map" component={mapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
