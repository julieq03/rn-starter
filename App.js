import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  //first object
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  //second object
  {
    initialRouteName: 'List', //first component that should be displayed
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
 