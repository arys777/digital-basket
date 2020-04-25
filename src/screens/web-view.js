import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

import globalStyles from "../theme/global-styles";

const WebViewScreen = ({ navigation }) => (
  <View style={globalStyles.fullContainer}>
    <WebView
      useWebKit
      source={{
        uri: navigation.getParam("uri"),
      }}
    />
  </View>
);

WebViewScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("title", "Document"),
});

export default WebViewScreen;
