import React from 'react';
import {FlatList, Text } from 'react-native';
import {useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = props =>{
  const products = useSelector(state=>state.products.availableProducts);
  return (<FlatList
      data={products}
      renderItem={itemData=>  <ProductItem
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          price={itemData.item.price}

      />
  } />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
