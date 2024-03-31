//import liraries
import React from 'react';
import {View} from 'react-native';
import {COLORS, GST, HP, RF} from '../../exporter';
import CustomText from '../customText';
import Input from '../input';

// create a component
const Header = ({search, setSearch}: any) => {
  return (
    <View style={GST.mx4}>
      <CustomText
        size={15}
        style={{textAlign: 'center', paddingBottom: RF(10)}}
        color={COLORS.WHITE}>
        {'CyberSpeed Movies'}
      </CustomText>
      <Input
        containerStyle={{borderRadius: RF(12)}}
        placeholder="SearchMovie"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
};
//make this component available to the app
export default Header;
