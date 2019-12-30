import {createStackNavigator} from 'react-navigation-stack'
import ProductsOverviewScreen from "../screens/shop/ProductsOverview";
import {createAppContainer} from 'react-navigation'
import Colors from "../constants/Colors";
import {Platform} from 'react-native';

import CartScreen from "../screens/shop/CartScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator(
    {
      ProductsOverview: ProductsOverviewScreen,
      ProductDetail: ProductDetailScreen,
      Cart: CartScreen
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },

        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    }
);

export default createAppContainer(ProductsNavigator);
