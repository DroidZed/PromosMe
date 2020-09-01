import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

const NavBarMain = (props) => {
  return (
    <View style={Styling.navbarStyle}>
      <View style={Styling.btnContainer}>
        <Button title="Home" />
        <Button title="Map" />
      </View>
    </View>
  );
};

const Styling = StyleSheet.create({
  navbarStyle: {
    flex: 1,
    backgroundColor: 'purple',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavBarMain;
