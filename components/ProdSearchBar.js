import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

//Imported Libraries:
import { useColorScheme } from 'react-native-appearance';

const ProdSearchBar = (props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={Styling.searchBarContainer}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: colorScheme === 'dark' ? 'white' : 'black' }}>
          Type in your search terms separated by comma
        </Text>
        <TextInput
          style={{ ...Styling.searchBar, borderBottomColor: colorScheme === 'dark' ? 'white' : 'black' }}
          onChangeText={props.updateSearch}
          placeholder="food,toothpaste,clothing..."
          blurOnSubmit={true}
          value={props.val}
          placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'}
          color="rgb(228, 99, 238)"
        />
      </View>
    </View>
  );
};

const Styling = StyleSheet.create({
  searchBar: {
    width: '100%',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default ProdSearchBar;
