import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = props => {
  return(
      <View style={styles.order}>
        <View style={styles.summary}>
          <Text style={styles.totalAmount}>
            ${props.amount.toFixed(2)}
          </Text>
          <Text style={styles.date}>
            {props.date}
          </Text>
        </View>
        <Button color = {Colors.primary} title={"Show Details"}/>
      </View>
  )
};

const styles = StyleSheet.create({
  order:{
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset:{width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 100,
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  totalAmount:{
    fontSize: 16
  },
  date:{
    fontSize: 16,
    color: '#888'
  }

});


export default OrderItem;
