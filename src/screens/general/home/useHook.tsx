//import liraries
import React, {Component, useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  COLORS,
  GST,
  RF,
  ROUTES,
  getVideo,
  navigate,
} from '../../../shared/exporter';
import useDebounce from '../../../shared/hook/useDebouce';
import {searchMovies} from '../../../shared/services/Service';
import FastImage from 'react-native-fast-image';
import {BASE_IMAGE} from '../../../shared/utils/endpoints';
import {CustomText} from '../../../shared/components';
import {styles} from './style';

// create a component
const useHomeHook = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const getMovies = async () => {
    setLoading(true);
    const res = await getVideo();
    setList(res.data?.results);
    setLoading(false);
  };
  const getsearchList = async () => {
    setLoading(true);
    const result = await searchMovies(search);
    setList(result.data?.results);
    setLoading(false);
  };
  useDebounce(
    () => {
      search ? getsearchList() : getMovies();
    },
    [search],
    300,
  );

  const renderItem = useCallback(({item, index}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigate(ROUTES.MovieDetail, {id: item?.id});
        }}
        style={styles.main}>
        <FastImage
          source={{
            uri: BASE_IMAGE + item.poster_path,
          }}
          style={styles.imageCon}
          resizeMode={'cover'}
        />
        <CustomText style={GST.p2}>{item?.original_title}</CustomText>
      </Pressable>
    );
  }, []);

  return {list, search, setSearch, loading, renderItem};
};
//make this component available to the app
export {useHomeHook};
