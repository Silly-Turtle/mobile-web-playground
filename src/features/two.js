/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { DrawerActions } from 'react-navigation';


  const TwoTest =({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to page two</Text>
        <Button title = "open drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Button>
      </View>
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default TwoTest