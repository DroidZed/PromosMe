import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

//Custom Components:
import OctiIcon from 'react-native-vector-icons/Octicons';
import * as Animatable from 'react-native-animatable';

import Colors from '../constants/Colors';

const HeartAnim = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Animatable.View
        animation={props.favorite ? 'bounceIn' : null}
        easing="ease-in-out"
        useNativeDriver={true}
        style={{ alignSelf: 'center' }}
        iterationCount={1}
      >
        <OctiIcon name="heart" color={props.favorite ? Colors.heartColor : props.color} size={50} />
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

export default HeartAnim;