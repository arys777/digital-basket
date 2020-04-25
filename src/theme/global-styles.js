import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  fullContainerCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verticalCenter: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
    shadowColor: "transparent",
  },
  stick: {
    flex: 1,
    height: 1,
    maxHeight: 1,
    backgroundColor: colors.darkGray,
  },
  topButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
    height: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
