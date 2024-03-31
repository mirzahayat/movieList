import React from 'react';
import { Text, TextProps } from 'react-native';
import { COLORS, RF } from '../../exporter';


interface Props extends TextProps {
  size: number;
  capital: boolean;
  color: any;
  onPress: () => void;
  medium: boolean;
  light: boolean;
  italic: boolean;
}

const CustomText = (props: Partial<Props>) => {
  const {
    size = 12,
    color = COLORS.BLACK,
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
    medium,
    italic,
    light,
  } = props;
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: RF(size),
          color,
          textTransform: capital ? 'uppercase' : 'none',
        },
        style,
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
