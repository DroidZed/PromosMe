import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Image } from 'react-native';

//Imported Libraries:
import { Provider, FAB } from 'react-native-paper';
import { useColorScheme } from 'react-native-appearance';

//Custom Components:
import { store } from '../store/favsStore';
import ProdSearchBar from '../components/ProdSearchBar';
import Product from '../components/Product';
import Header from '../components/Header';
import FocusAwareStatusBar from '../components/FocusAware';

//Color Palette:
import Colors from '../constants/Colors';

const HomeScreen = () => {
  const { State } = useContext(store);
  const [input, setInput] = useState('');
  const [pressed, setPressed] = useState(false);
  const [collectedData, setCollectedData] = useState([]);
  const colorScheme = useColorScheme();

  let fav_col = collectedData.filter((e) => State.favorites.includes(e.id));

  const renderItem = ({ item }) => (
    <Product
      name={item.name}
      description={item.description}
      type={item.type}
      promo={item.promo}
      address={item.address}
      image={item.image?.split('.')[0]}
      price={item.price}
      id={item.id}
    />
  );

  console.log(State);

  const url = 'http://localhost:3000/Product/';

  const getInfos = () => {
    return fetch(url)
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

  return (
    <TouchableWithoutFeedback>
      <Provider>
        <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
          <FocusAwareStatusBar barStyle="light-content" backgroundColor={Colors.darkPrimary} />
          <Header title="HOME" style={{ backgroundColor: Colors.accent }} />
          <ProdSearchBar val={input} clearInput={() => setInput('')} updateSearch={(search) => setInput(search)} />
          <View style={Styling.ListContainer}>
            <FlatList
              contentContainerStyle={{ padding: 10 }}
              data={
                input
                  ? !input.includes(',')
                    ? collectedData.filter((term) => (term.type.includes(input) ? term : null))
                    : collectedData.filter((term) => input.split(',').includes(term.type))
                  : pressed && fav_col
                  ? fav_col
                  : collectedData
              }
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <FAB style={Styling.fab} small icon="heart" onPress={() => setPressed(!pressed)} />
        </View>
      </Provider>
    </TouchableWithoutFeedback>
  );
};

const Styling = StyleSheet.create({
  ListContainer: {
    width: '95%',
    alignSelf: 'center',
    flex: 1,
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: 'black',
    backgroundColor: Colors.heartColor,
  },
});

export default HomeScreen;
