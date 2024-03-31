import {StyleSheet} from 'react-native';
import {COLORS, RF} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    margin: RF(10),
    borderRadius: RF(12),
  },
  imageCon:{
    height: RF(120),
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  }
});

export {styles};
