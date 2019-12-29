import {createStackNavigator} from 'react-navigation-stack'
import ProductsOverviewScreen from "../screens/shop/ProductsOverview";
import {createAppContainer} from 'react-navigation'
import Colors from "../constants/Colors";
import {Platform} from 'react-native';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,

},
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS ==='android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS==='android'? 'white' : Colors.primary
        }
    });

export default createAppContainer(ProductsNavigator);
