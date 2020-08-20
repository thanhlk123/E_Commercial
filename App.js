import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import ProfileScreen from './screens/ProfileScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import BagScreen from './screens/BagScreen'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

const numberReducer = (state = { number: 1 }, action) => {

  switch(action.type) {
    case 'ADD_NUMBER':
      return { number : state.number + 1 }

    case 'SUB_NUMBER':
      return { number : state.number - 1 }
  }

  return state;
}


let store = createStore(
  combineReducers({ 
    number: numberReducer,
  })
 )

 store.subscribe(() => console.log(store.getState()))

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={17} />
          ),
        }} name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="grid" color={color} size={17} />
          ),
        }}
        name="Categories" component={CategoriesScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bell" color={color} size={17} />
          ),
        }}
        name="Notifications" component={NotificationsScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Bag',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" color={color} size={17} />
          ),
        }}
        name="Bag" component={BagScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={17} />
          ),
        }}
        name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={ store }>
      <StatusBar backgroundColor="#3b5f8a" barStyle="dark-content" />
      <MyTabs />
      </Provider>
    </NavigationContainer>
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
