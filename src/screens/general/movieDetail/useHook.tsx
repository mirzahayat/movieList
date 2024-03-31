//import liraries
import { useCallback, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CustomText } from '../../../shared/components';
import { RF } from '../../../shared/exporter';
import {
  getMoviesActors,
  getMoviesDetail,
} from '../../../shared/services/Service';
import { BASE_IMAGE } from '../../../shared/utils/endpoints';
import { style } from './styles';

// create a component
const useDetailHook = ({id}: any) => {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState<any>({});
  const [actor, setactor] = useState<any>([]);

  const getMovieDetail = async () => {
    setLoading(true);
    const res = await getMoviesDetail(id);
    setDetail(res?.data);
    setLoading(false);
  };
  const getMovieActors = async () => {
    const res = await getMoviesActors(id);
    setactor(res?.data?.cast);
  };
  useLayoutEffect(() => {
    getMovieDetail();
    getMovieActors();
  }, []);

  const renderItem = useCallback(({item}: any) => {
    return (
      <View style={style.actorCon}>
        <FastImage
          source={{
            uri: BASE_IMAGE + item?.profile_path,
          }}
          style={style.actorProfile}
        />
        <CustomText style={{paddingTop: RF(10)}} color={'white'}>
          {item?.name}
        </CustomText>
      </View>
    );
  }, []);

  return {
    loading,
    detail,
    actor,
    renderItem,
  };
};

//make this component available to the app
export { useDetailHook };

