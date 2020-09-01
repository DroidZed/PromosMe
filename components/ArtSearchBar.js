import React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

// custom components:

const ArtSearchBar = (props) => {
  return (
    <TextInput
      style={{ ...Styling.searchBar, ...props.style }}
      onChangeText={props.updateSearch}
      placeholder="input smth"
      onBlur={props.clearInput}
      blurOnSubmit={true}
      value={props.val}
    />
  );
};

const Styling = StyleSheet.create({
  searchBar: {},
});

export default ArtSearchBar;
