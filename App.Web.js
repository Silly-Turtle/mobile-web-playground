import React, { Component } from "react";
import { View, Text} from "react-native";
import WebRoutesGenerator from "./src/NativeWebRouteWrapper";

import HomeTest from './src/features/home'
import OneTest from './src/features/one'
import TwoTest from './src/features/two'

const routeMap = {
    Home: {
      component: HomeTest,
      path: "/",
      exact: true
    },
    One: {
      component: OneTest,
      path: "/one"
    },
    Two: {
      component: TwoTest,
      path: "/two",
      exact: true
    }
  };

class App extends Component {
    render() {
      return (
        <View style={{ height: "100vh", width: "100vw" }}>
          {WebRoutesGenerator({ routeMap })}
        </View>
      );
    }
  }
  
  export default App;