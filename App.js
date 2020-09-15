import React, { useEffect, useState } from 'react';

//Imported Libraries:
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'react-native-appearance';
import NetInfo from '@react-native-community/netinfo';

//Custom Components:
import { FavsProvider } from './store/favsStore';

//Screens:
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import MapScreen from './screens/MapScreen';
import OfflineScreen from './screens/offline';

//Color Palette:
import Colors from './constants/Colors';

const Tab = createBottomTabNavigator();

function homeScreen() {
  return (
    <FavsProvider>
      <HomeScreen />
    </FavsProvider>
  );
}

function contactScreen() {
  return <ContactScreen />;
}

function mapScreen() {
  return <MapScreen />;
}

const App = () => {
  const colorScheme = useColorScheme();
  const [isThereInternet, setIsThereInternet] = useState(false);

  const fetchingNetInfo = () => {
    NetInfo.fetch().then((state) => setIsThereInternet(state.isConnected));
    SplashScreen.hide();
  };

  useEffect(() => fetchingNetInfo(), []);
  return (
    <AppearanceProvider>
      {isThereInternet === false ? (
        <OfflineScreen />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            lazy={true}
            backBehavior="history"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home')
                  return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
                else if (route.name === 'Map')
                  return <MaterialCommunityIcons name="mapbox" size={size} color={color} />;
                else if (route.name === 'Contact') {
                  return (
                    <MaterialCommunityIcons
                      name={focused ? 'contacts' : 'contacts-outline'}
                      size={size}
                      color={color}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: 'gray',
              showLabel: true,
              adaptive: true,
              tabStyle: {
                backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
              },
            }}
          >
            <Tab.Screen name="Home" component={homeScreen} />
            <Tab.Screen name="Map" component={mapScreen} />
            <Tab.Screen name="Contact" component={contactScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </AppearanceProvider>
  );
};

export default App;
