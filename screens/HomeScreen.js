import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Keyboard, Button, StatusBar } from 'react-native';

//custom components:

import ArtSearchBar from '../components/ArtSearchBar';
import ArticlesList from '../components/ArticlesList';
import { favorites as fav } from '../model.json';

const HomeScreen = (props) => {
  const [input, setInput] = useState('');
  const [collectedData, setCollectedData] = useState([]);
  const [storing, setStoring] = useState({});

  const STORAGE_KEY = '@apiDATA';

  const saveData = async (bab) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, bab);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const userInput = await AsyncStorage.getItem(STORAGE_KEY);

      if (userInput !== null) {
        setStoring(userInput);
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

  const updateSearch = (search) => setInput(search);

  const clearInput = () => {
    setInput('');
    Keyboard.dismiss();
  };

  const saveAndSetFetches = (info) => {
    saveData(info);
    setCollectedData(info);
  };

  /*
  *
  * TODO: #1 fix the storing of the data fetched from the api :/
  */

  let url = 'http://localhost:3000/Article/';

  const getInfos = () => {
    return fetch(url + input)
      .then((response) => {
        console.log('SUCCESS');
        response
          .json()
          .then((data) => {
            saveAndSetFetches(data);
          })
          .catch('NO DATA TO BE RETRIEVED.');
      })
      .catch(console.log('FAILURE'));
  };

  useEffect(() => {
    getInfos();
  }, []);

  console.log(collectedData);

  return (
    <View style={{ ...Styling.HomeScreen, ...props.style }}>
      <StatusBar barStyle="default" translucent={true} />
      <View>
        <View>
          <Button title="Home" onPress={props.navHome} />
          <Button title="Map" onPress={props.navMap} />
        </View>
      </View>
      <ArtSearchBar
        findInfo={() => {}}
        val={input}
        clearInput={clearInput}
        updateSearch={updateSearch}
        style={Styling.searchBar}
      />
      <Button title="X" onPress={clearInput} />
      <View>
        <ArticlesList data={collectedData} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
};

const Styling = StyleSheet.create({
  searchBar: {},
  HomeScreen: {},
});

export default HomeScreen;
