import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

const { width, height } = Dimensions.get('screen')

export default class ProfileScreen extends React.Component {

  _handleGoogleLogin = async () => {
    try {
      const { type, user,idToken, accessToken } = await Google.logInAsync({
        androidStandaloneAppClientId: '208098970743-e8442r8frk3vhbcjja5jg4fqa0ivn326.apps.googleusercontent.com',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
      switch (type) {
        case 'success': {
          //////////////////////////////////
          console.log('success')
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Tính năng đang bảo trì. Vui lòng thử lại sau',
          );
          break;
        }
        default: {
          Alert.alert(
            'Tính năng đang bảo trì. Vui lòng thử lại sau',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Tính năng đang bảo trì. Vui lòng thử lại sau',
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}></View>
        <View style={styles.container}>
          <Image
            source={require('../images/loginPage/login2.jpg')}
            style={{ width: width, height: height * 0.5 }}
            resizeMode='contain'
          />
          <View style={{ height: '50%', alignItems: 'center' }}>
            <Text style={{ padding: 10, color: 'grey', fontSize: 15 }}>Loved Our Collection? Login with</Text>
            <TouchableOpacity
              onPress={this._handleGoogleLogin}
            >
              <View style={[{ height: 40, flexDirection: 'row', backgroundColor: '#1325ab', padding: 5, borderRadius: 5 }, styles.centerItem, styles.shadow]}>
                <View style={[{ width: 33, height: 33, backgroundColor: 'white' }, styles.centerItem]}>
                  <Image source={require('../images/loginPage/loginGG.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode='contain' />
                </View>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>  Sign in with Google</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ padding: 10, color: 'grey', fontSize: 15 }}> -or use email address- </Text>
            <View style={{ flexDirection: 'row', marginTop:20 }}>
              <TouchableOpacity>
                <View style={[styles.loginButton, styles.borderRight, styles.centerItem]}>
                  <Text style={styles.loginText}>LOGIN</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.loginButton, styles.centerItem]}>
                  <Text style={styles.loginText}>SIGNUP</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width: 0.5 * width, height: 25
  },
  borderRight: {
    borderRightColor: 'grey',
    borderRightWidth: 2
  },
  header: {
    width: width,
    height: 24,
    backgroundColor: "#3b5f8a"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginText:{
    color:'#1325ab',
    fontWeight:'bold'
  }
});
