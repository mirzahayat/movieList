import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../../../shared/utils/routes';
import { Home } from '../../../screens/general/home';
import { MovieDetail } from '../../../screens/general/movieDetail';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.Home} component={Home} />
      <Stack.Screen name={ROUTES.MovieDetail} component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default MainStack;
