import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {FontAwesome} from '@expo/vector-icons'

import HomeMainScreen from '../HomeStack/HomeMainScreen'
import ShopScreen from '../HomeStack/ShopScreen'

const Stack = createStackNavigator();

class HomeScreen extends Component {

  static HomeScreenOptions = ()=> {
      let headerShown  =false
      let headerTitleAlign = 'center'
    return {headerShown, headerTitleAlign}
  }
  static ShopScreenOptions = () => {
    let headerTitleAlign = 'center'
    let headerStyle ={height:70,backgroundColor: '#76a6d6', opacity:1}
    let headerTintColor = 'white'
    let headerRight =()=> (<FontAwesome style={{marginRight:15}} name='search' color='white' size={18}  />)
    return {headerTitleAlign, headerStyle, headerRight, headerTintColor}
  }
  render() {
    return (
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen name="Home" component={HomeMainScreen} options={()=> this.constructor.HomeScreenOptions()}  />
        <Stack.Screen name="Shop" component={ShopScreen}  options={()=> this.constructor.ShopScreenOptions()}/>
      </Stack.Navigator>
    );
  }
}
export default HomeScreen