//import liraries
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {backImage} from '../../../assets/icon';
import {CustomText, Wrapper} from '../../../shared/components';
import {COLORS, GST, RF, navigationRef} from '../../../shared/exporter';
import {BASE_IMAGE} from '../../../shared/utils/endpoints';
import {style} from './styles';
import {useDetailHook} from './useHook';
import CustomLoading from '../../../shared/components/customLoading';

// create a component
const MovieDetail = ({route}: any) => {
  const id = route.params?.id;
  const {loading, detail, actor, renderItem} = useDetailHook({id});

  return (
    <Wrapper noPaddingTop>
      <View style={style.container}>
        <BackButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={{
              uri: BASE_IMAGE + detail?.backdrop_path,
            }}
            resizeMode={'cover'}
            style={style.posterImage}
          />
          <View style={style.profilecard}>
            <FastImage
              source={{
                uri: BASE_IMAGE + detail?.poster_path,
              }}
              style={style.movieProfile}
            />
            <View style={style.infoContainer}>
              <CustomText color={COLORS.WHITE} style={style.titleCon} size={18}>
                {detail.original_title}
              </CustomText>
              <CustomText style={style.reviewCon} color={COLORS.WHITE}>
                {'Review: ' + detail?.vote_average}
              </CustomText>
            </View>
          </View>
          <View style={GST.p3}>
            <CustomText style={GST.pb3} size={16} color={COLORS.WHITE}>
              {'Description:'}
            </CustomText>
            <CustomText style={style.desc} color={COLORS.WHITE}>
              {detail?.overview}
            </CustomText>
          </View>
          <CustomText style={GST.p3} size={16} color={COLORS.WHITE}>
            {'Actors:'}
          </CustomText>
          <FlatList
            data={actor}
            horizontal
            keyExtractor={(_, index) => index?.toString()}
            renderItem={renderItem}
          />
        </ScrollView>
        {loading && <CustomLoading />}
      </View>
    </Wrapper>
  );
};

const BackButton = () => {
  return (
    <Pressable
      onPress={() => navigationRef?.current?.goBack()}
      style={style.backBtn}>
      <FastImage source={backImage} style={{width: 20, height: 20}} />
    </Pressable>
  );
};
//make this component available to the app
export {MovieDetail};
