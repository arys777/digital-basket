import React, { useState } from "react";
import { View, SafeAreaView, Button, Text, Alert } from "react-native";

import globalStyles from "../../../theme/global-styles";
import colors from "../../../theme/colors";
import BarCodeModal from "../../../components/BarCodeModal";
import { fetchBarCodePermissions } from "../../../utils";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [barCode, setBarCode] = useState(false);
  console.log(barCode);
  const handleStartShopping = () => {
    fetchBarCodePermissions()
      .then(() => setModalVisible(true))
      .catch((err) => Alert.alert(err.message));
  };

  return (
    <SafeAreaView style={globalStyles.fullContainer}>
      <View style={globalStyles.fullContainer}>
      </View>
      <Button
        title="Начать Покупки"
        accessibilityLabel={colors.blue}
        onPress={handleStartShopping}
      />
      <BarCodeModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onBarCodeScanned={(value) => setBarCode(value)}
      />
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Ваша Корзина",
};

export default HomeScreen;
