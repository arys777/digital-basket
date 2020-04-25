import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";

import Navigation from "./src/navigation";
import NavigationService from "./src/services/navigation";
import globalStyles from "./src/theme/global-styles";

const AppContainer = createAppContainer(Navigation);

const App = () => {
  return (
    <View style={globalStyles.fullContainer}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
