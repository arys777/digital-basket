import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/app/home";

const AppNavigation = createStackNavigator(
  {
    home: HomeScreen,
  },
  {
    initialRouteName: "home",
  },
);

export default AppNavigation;
