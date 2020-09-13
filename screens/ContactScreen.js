import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';

//Custom Components:
import Header from '../components/Header';
import FocusAwareStatusBar from '../components/FocusAware';
import LabelToButtonInline from '../components/LabelToButtonInline';
import UICondText from '../components/UICondText';

//Imported Libraries:
import { useColorScheme } from 'react-native-appearance';
import { Card } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

//Color Palette:
import Colors from '../constants/Colors';

const ContactScreen = (props) => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
      <Header title="About Us" style={{ backgroundColor: Colors.contactHeader }} />
      <ScrollView bounces={true} fadingEdgeLength={1} showsVerticalScrollIndicator={false}>
        <View style={Styling.gimgCnt}>
          <Image
            resizeMode="cover"
            source={{ uri: colorScheme === 'dark' ? 'sunset_dark' : 'sunset_white' }}
            style={Styling.image}
          />
        </View>
        <View>
          <Card style={Styling.cardCtr}>
            <Card.Cover
              source={{ uri: 'full_stack' }}
              width={330}
              height={90}
              style={{
                alignSelf: 'center',
                height: 80,
                width: 330,
                backgroundColor: colorScheme === 'dark' ? 'transparent' : 'gray',
              }}
            />

            <UICondText style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20 }}>
              <Text style={{ color: 'rgb(2, 151, 19)' }}>Web</Text> &{' '}
              <Text style={{ color: 'rgb(4, 127, 220)' }}>Mobile</Text> Development Agency{'\n'}
            </UICondText>

            <View
              style={{
                paddingHorizontal: 100,
                marginVertical: 10,
              }}
            >
              <LabelToButtonInline
                label="Mail"
                where={'mailto:contact@smarttouchtunisie.com'}
                name="email-send"
                size={20}
                color="gray"
              />

              <LabelToButtonInline label="Website" where={'http:www.fullstack.tn/'} name="web" size={20} color="gray" />

              <LabelToButtonInline
                label="Address"
                where={'P8M8+G9 Ez Zahra'}
                name="map-marker-radius-outline"
                size={20}
                color="gray"
              />
              <LabelToButtonInline
                label="LinkedIn"
                where={'https:www.linkedin.com/company/smart-touch-ltd'}
                name="linkedin"
                size={20}
                color="rgb(14, 118, 168)"
              />

              <LabelToButtonInline label="Tel" where={'tel:+21671292717'} name="phone" size={20} color="gray" />
            </View>
          </Card>
          <View>
            <View style={Styling.imageContainer}>
              <Image source={{ uri: 'pp' }} style={Styling.image} />
            </View>
            <View>
              <UICondText style={{ alignSelf: 'center', marginVertical: 10, fontSize: 35 }}>Aymen Dhahri</UICondText>
              <Card style={Styling.cardCtr}>
                <Animatable.Text
                  style={{
                    alignSelf: 'center',
                    marginVertical: 10,
                  }}
                  iterationCount="infinite"
                  easing="ease-in-out"
                  animation="pulse"
                >
                  <UICondText>Creator of Promos FindME{'\n'}</UICondText>
                </Animatable.Text>

                <View
                  style={{
                    paddingHorizontal: 100,
                    marginVertical: 10,
                  }}
                >
                  <LabelToButtonInline
                    label="Mail"
                    where={'mailto:aymen.dragon5@gmail.com'}
                    name="email-send"
                    size={20}
                    color="gray"
                  />

                  <LabelToButtonInline
                    label="Website"
                    where={'https:droidzed.github.io'}
                    name="web"
                    size={20}
                    color="gray"
                  />

                  <LabelToButtonInline
                    label="GitHub"
                    where={'https:github.com/DroidZed'}
                    name="github"
                    size={20}
                    color={colorScheme === 'light' ? 'black' : 'white'}
                  />

                  <LabelToButtonInline
                    label="Twitter"
                    where={'https:www.twitter.com/AymenZ37'}
                    name="twitter"
                    size={20}
                    color="cyan"
                  />

                  <LabelToButtonInline
                    label="Reddit"
                    where={'https:www.reddit.com/u/DroidZed'}
                    name="reddit"
                    size={20}
                    color="tomato"
                  />

                  <LabelToButtonInline
                    label="LinkedIn"
                    where={'https:www.linkedin.com/in/aymen-d'}
                    name="linkedin"
                    size={20}
                    color="rgb(14, 118, 168)"
                  />
                </View>
              </Card>
            </View>
          </View>
        </View>
      </ScrollView>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={Colors.contactbar} />
    </View>
  );
};

const Styling = StyleSheet.create({
  gimgCnt: {
    width: '63%',
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  cardCtr: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 180,
    height: 180,
    overflow: 'hidden',
    marginVertical: 30,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ContactScreen;
