import { createSwitchNavigator } from "react-navigation";

import AppNavigation from "./navigation.app";

const Navigation = createSwitchNavigator(
  {
    // loading: { screen: LoadingScreen },
    app: AppNavigation,
  },
  {
    initialRouteName: "app",
    mode: "card",
    resetOnBlur: true,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
);

export default Navigation;
