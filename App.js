import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer  from './store/reducers/products'
import ShopNavigator from "./navigation/ShopNavigator";
import { AppLoading} from 'expo'
import * as Font from 'expo-font';

import cartReducer from './store/reducers/cart'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);


export default function App() {


  return (
      <Provider store={store}>
   <ShopNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
