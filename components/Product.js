import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//Custom Components:
import HeartAnime from './HeartAnim';
import { store } from '../store/favsStore';

//Imported Libraries:
import { Card, Title, Paragraph } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useColorScheme } from 'react-native-appearance';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinkingButton from './LinkingButton';

//Color palette:
import Colors from '../constants/Colors';

const Product = (props) => {
  const colorScheme = useColorScheme();
  const { setState, State } = useContext(store);
  return (
    <Animatable.View animation="fadeInDown" easing="ease-in-out" useNativeDriver={true} iterationCount={1}>
      <Card
        style={{
          ...Styling.cardCtr,
          backgroundColor: colorScheme === 'dark' ? 'rgb(23, 23, 23)' : 'white',
          borderColor: colorScheme === 'dark' ? 'black' : 'white',
          borderRadius: 20,
          padding: 5,
        }}
      >
        <Card.Content style={{ marginVertical: 5 }}>
          <Title style={{ alignSelf: 'center' }}>{props.name}</Title>
          <Paragraph>
            <Text style={{ color: 'gray', fontStyle: 'italic' }}>{props.description}</Text>
            {'\n'}Promo: <Text style={{ color: Colors.promoText }}>-{props.promo}%</Text>
          </Paragraph>
        </Card.Content>
        <TouchableOpacity onPress={() => {}}>
          <Card.Cover source={{ uri: props.image }} style={{ borderRadius: 5 }} />
        </TouchableOpacity>
        <Card.Actions style={{ marginVertical: 5, paddingVertical: 0 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
            <HeartAnime
              favorite={State.favorites?.includes(props.id)}
              onPress={() =>
                setState((p) => ({
                  ...p,
                  favorites: [...p.favorites, props.id],
                }))
              }
              color={colorScheme === 'dark' ? 'white' : 'black'}
            />
            <LinkingButton
              where={'https://plus.codes/' + props.address}
              name="map-marker-radius-outline"
              size={20}
              color="rgb(209, 91, 225)"
              msg="See In Maps "
            />
          </View>
        </Card.Actions>
      </Card>
    </Animatable.View>
  );
};

const Styling = StyleSheet.create({
  cardCtr: {
    padding: 10,
    margin: 10,
    elevation: 10,
  },
});

export default Product;
