import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import ProductsOverviewScreen from "../screens/shop/ProductsOverview";
import {createAppContainer} from 'react-navigation'
import Colors from "../constants/Colors";
import {Platform} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

import CartScreen from "../screens/shop/CartScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import {create} from "react-native/jest/renderer";
import {createDrawerNavigator} from "react-navigation-drawer";


const ProductsNavigator = createStackNavigator(
    {
      ProductsOverview: ProductsOverviewScreen,
      ProductDetail: ProductDetailScreen,
      Cart: CartScreen,
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (<Ionicons
            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            size={23}
            color={drawerConfig.tintColor}
        />)
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },

        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    }
);

const OrdersNavigator = createStackNavigator({
  Orders:OrdersScreen
},
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (<Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
        />)
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },

        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    });

const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator
},
    {
      contentOptions:{
        activeTintColor: Colors.primary
      }
    })
export default createAppContainer(ShopNavigator);
