import { BarCodeScanner } from "expo-barcode-scanner";

export const fetchBarCodePermissions = () => new Promise((res, rej) => {
  BarCodeScanner.getPermissionsAsync()
    .then(({ status }) => {
      if (status === "granted") {
        res(true);
      } else {
        BarCodeScanner.requestPermissionsAsync()
          .then(({ status }) => {
            if (status === "granted") {
              res(true);
            } else {
              rej(new Error("Permission not granted"));
            }
          });
      }
    });
});
