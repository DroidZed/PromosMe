import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//Custom Components:
import Header from '../components/Header';
import FocusAwareStatusBar from '../components/FocusAware';
import LabelToButtonInline from '../components/LabelToButtonInline';

//Imported Libraries:
import { useColorScheme } from 'react-native-appearance';

//Color Palette:
import Colors from '../constants/Colors';

const ContactScreen = (props) => {
  const colorScheme = useColorScheme();

  const textCol = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
      <Header title="About Us" style={{ backgroundColor: Colors.contactHeader }} />
      <Image source={{ uri: colorScheme === 'dark' ? 'sunset_dark' : 'sunset_white' }} style={Styling.img} />
      <View>
        <View>
          <Image
            source={{ uri: 'full_stack' }}
            width={330}
            height={90}
            style={{
              alignSelf: 'center',
              height: 80,
              width: 330,
            }}
          />
          <Text style={{ color: textCol }}>FullStack is a web and mobile development agency, located in Ez Zahra.</Text>
        </View>
        <View style={{ paddingHorizontal: 100 }}>
          <LabelToButtonInline
            label="Mail"
            styleT={{ color: textCol }}
            where={'mailto:contact@smarttouchtunisie.com'}
            name="email-send"
            size={20}
            color="gray"
          />

          <LabelToButtonInline
            label="Web Site"
            styleT={{ color: textCol }}
            where={'http:www.fullstack.tn/'}
            name="web"
            size={20}
            color="gray"
          />

          <LabelToButtonInline
            styleT={{ color: textCol }}
            label="Address"
            where={'P8M8+G9 Ez Zahra'}
            name="map-marker-radius-outline"
            size={20}
            color="gray"
          />

          <LabelToButtonInline
            label="Tel"
            styleT={{ color: textCol }}
            where={'tel:+21671292717'}
            name="phone"
            size={20}
            color="gray"
          />
        </View>
      </View>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={Colors.contactbar} />
    </View>
  );
};

const Styling = StyleSheet.create({
  img: {
    width: '20%',
    height: '20%',
    alignSelf: 'center',
    margin: 10,
  },
});

export default ContactScreen;
