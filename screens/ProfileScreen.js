import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={{ flex: 1}}>
        <View style={{backgroundColor:'blue', height:24, widht:'100%'}}></View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      </View>
    );
  }