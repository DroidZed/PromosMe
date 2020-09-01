import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Keyboard, Button, StatusBar } from 'react-native';

//custom components:

import ArtSearchBar from '../components/ArtSearchBar';
import ArticlesList from '../components/ArticlesList';
import {favorites as fav} from '../model.json';


const HomeScreen = (props) => {
  const [input, setInput] = useState('');
  const [collectedData, setCollectedData] = useState([]);

  const updateSearch = (search) => setInput(search);

  const clearInput = () => {
    setInput('');
    Keyboard.dismiss();
  };

  let url = 'http://localhost:3000/Article/';

  const getInfos = () => {
    return fetch(url + input)
      .then((response) => {
        console.log('SUCCESS');
        response
          .json()
          .then((data) => {
            setCollectedData(data);
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
        <ArticlesList
          data={collectedData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const Styling = StyleSheet.create({
  searchBar: {},
  HomeScreen: {},
});

export default HomeScreen;
