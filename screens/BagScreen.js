import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BagScreen() {
    return (
      <View style={{ flex: 1}}>
        <View style={{backgroundColor:'blue', height:24, widht:'100%'}}></View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Bag!</Text>
        </View>
      </View>
    );
  }