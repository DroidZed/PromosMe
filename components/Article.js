import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

//custom components:
import AsyncStorage from '@react-native-community/async-storage';

const Article = (props) => {
  
  const [favorite, setFavorite] = useState('');

  const STORAGE_KEY = '@favorites';

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, input);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const userInput = await AsyncStorage.getItem(STORAGE_KEY);

      if (userInput !== null) {
        setInput(userInput);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  return (
    <View>
      <Text>{props.children}</Text>
      <Button
        title="+"
        onPress={() => {
          console.log('ADDED TO FAVORITES !');
        }}
      />
    </View>
  );
};

const Styling = StyleSheet.create({});

export default Article;
