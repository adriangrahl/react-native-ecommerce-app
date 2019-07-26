import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductList from '~/pages/ProductList';
import ProductDetails from '~/pages/ProductDetails';
import Cart from '~/pages/Cart';
import { colors } from './styles';

const HomeIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

const Routes = createBottomTabNavigator(
  {
    Home: createSwitchNavigator(
      {
        ProductList,
        ProductDetails,
      },
      {
        navigationOptions: {
          tabBarIcon: HomeIcon,
        },
      },
    ),
    Cart,
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.light,
      style: {
        borderTopWidth: 0,
        backgroundColor: colors.whiteTransparent,
      },
    },
    initialRouteName: 'Cart',
  },
);

export default createAppContainer(Routes);
