import React, {useRef} from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';

const TouchableScale = ({children, onPress}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () =>
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();

  const pressOut = () =>
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => onPress?.());

  return (
    <TouchableWithoutFeedback onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={{transform: [{scale}]}}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TouchableScale;
