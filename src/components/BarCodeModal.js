import React from "react";
import { View, Modal, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import PropTypes from "prop-types";

import colors from "../theme/colors";

const BarCodeModal = ({ visible, closeModal, onBarCodeScanned }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={(value) => {
            onBarCodeScanned(value);
            closeModal();
          }}
          style={StyleSheet.absoluteFillObject}
        />
        <Button title="Закрыть" onPress={closeModal} />
      </View>
    </Modal>
  );
};

BarCodeModal.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  onBarCodeScanned: PropTypes.func,
};

export default BarCodeModal;
