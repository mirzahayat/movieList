//import liraries
import React from 'react';
import {FlatList, View} from 'react-native';
import {Header, Wrapper} from '../../../shared/components';
import CustomLoading from '../../../shared/components/customLoading';
import {COLORS} from '../../../shared/exporter';
import {styles} from './style';
import {useHomeHook} from './useHook';

// create a component
const Home = () => {
  const {list, search, setSearch, loading, renderItem} = useHomeHook();

  return (
    <Wrapper noPaddingBottom>
      <View style={styles.container}>
        <Header {...{search, setSearch}} />
        <View style={{flex: 1, backgroundColor: COLORS.BLACK}}>
          <FlatList
            data={list}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            numColumns={2}
          />
        </View>
        {loading && <CustomLoading />}
      </View>
    </Wrapper>
  );
};
//make this component available to the app
export {Home};
