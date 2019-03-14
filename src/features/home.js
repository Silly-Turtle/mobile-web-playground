/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withRouter } from "react-router-dom";
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';


 const HomeTest = ({navigation}) => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to home page!</Text>
        <Button type="primary" onPress={() => navigation.navigate("Two")} >default</Button>
      {/* <TouchableOpacity >
        <Text style={styles.button} >click me</Text>
      </TouchableOpacity> */}
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
    margin: 30
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "red",
    color: "#841584",
    margin: 20
  }
});

// export default withRouter(HomeTest)
export default HomeTest;
