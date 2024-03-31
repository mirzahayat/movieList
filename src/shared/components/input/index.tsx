import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, GST, RF} from '../../exporter';

const {BLACK, LIGHT_GRAY, SILVER} = COLORS;

interface InputProp extends TextInputProps {
  containerStyle: ViewStyle;
  leftIcon?: any;
  rightIcon?: any;
  error: any;
  showPassword: boolean;
  toggleShowPassword: () => void;
  iconColor: string;
}

const Input = forwardRef((props: Partial<InputProp>, ref: any) => {
  const {containerStyle, multiline, editable = true} = props;

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.subContainer,
          containerStyle,
          multiline && styles.flexStart,
        ]}>
        <TextInput
          ref={ref}
          pointerEvents={editable ? 'auto' : 'none'}
          {...props}
          style={[styles.input, multiline && styles.multiline]}
          placeholderTextColor={LIGHT_GRAY}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    ...GST.mb2,
  },
  input: {
    flex: 1,
    paddingRight: RF(14),
    color: BLACK,
    fontSize: RF(14),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RF(40),
    ...GST.px5,
    backgroundColor: SILVER,
  },
  multiline: {
    height: RF(80),
  },
  flexStart: {
    alignItems: 'flex-start',
  },
});

export default Input;
