import {StyleSheet} from 'react-native';
import {COLORS, HP, RF, WP} from '../../../shared/exporter';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterImage: {width: WP(100), height: HP(30)},
  profilecard: {
    paddingLeft: RF(20),
    flexDirection: 'row',
  },
  movieProfile: {width: RF(100), height: RF(140), bottom: RF(10)},
  infoContainer: {paddingTop: RF(15), paddingLeft: RF(10)},
  titleCon: {width: WP(60)},
  reviewCon: {lineHeight: RF(20), paddingTop: RF(10)},
  desc:{paddingLeft: RF(10), lineHeight: RF(16)},
  backBtn:{
    position: 'absolute',
    top: RF(50),
    left: RF(10),
    backgroundColor: COLORS.WHITE,
    padding: RF(5),
    borderRadius: RF(65),
    elevation: 1,
    zIndex: 1,
  },
  actorCon:{
    alignItems: 'center',
    marginLeft: RF(20),
    width: WP(20),
  },
  actorProfile:{
    width: RF(70),
    height: RF(70),
    borderRadius: RF(65),
  }
});

export {style};
