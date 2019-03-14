import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator
  } from "react-navigation";
  import HomeTest from '../features/home.js';
  import One from '../features/one';
  import Two from '../features/two';

  const TabNav = createBottomTabNavigator({
      One: {
          screen: One
      },
      Two: {
          screen: Two
      }
  })

  const TestStack = createStackNavigator({
      Home: {
          screen: HomeTest
      },
      One: {
          screen: One
      },
      nav: {
          screen: TabNav, 
      }
  });



  const AppContainer = createAppContainer(TestStack)

  export default AppContainer