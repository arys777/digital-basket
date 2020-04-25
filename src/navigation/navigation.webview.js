import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import WebViewScreen from "../screens/web-view";
import HeaderLeft from "../components/HeaderLeft";
import globalStyles from "../theme/global-styles";

const WebViewNavigation = createStackNavigator(
  {
    webView: WebViewScreen,
  },
  {
    initialRouteName: "webView",
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: globalStyles.headerStyle,
      headerLeft: <HeaderLeft onPress={() => navigation.goBack(null)} />,
    }),
  },
);

export default WebViewNavigation;
