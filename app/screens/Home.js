import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Button } from 'react-native-elements';
import MediaBox from '../components/MediaBox';


class HomeScreen extends Component {
  render() {
    return (
      <View style={{minHeight: '100%'}}>
        <Header/>
        <View
           style={{
             flex: 1
           }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              source={require('../../public/images/chaplet1.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              backgroundColor: 'transparent',
            }}
          >
            <Image
              source={require('../../public/images/reactiv.png')}
              style={{
                width: 128,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                color: '#fff',
                fontSize: 20,
              }}
            >
              DISCOVER.LOCAL.WORLDWIDE
            </Text>
            <View
              style={{
                marginTop: 20,
                marginBottom: 30,
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <Button buttonStyle={styles.button} title='ARTIST SIGN UP'/>
              <Button buttonStyle={styles.button} title='FAN SIGN UP'/>
            </View>
          </View>
        </View>

        <MediaBox />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }
});

export default HomeScreen;
