import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";


//shows what screen will be visible on the app
const navigator = createStackNavigator(
  //first object
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
  },
  //second object
  {
    initialRouteName: 'Home', //first component that should be displayed
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
 