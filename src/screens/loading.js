import React from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { withNavigation } from "react-navigation";
import { useQuery, withApollo } from "react-apollo";
import Constants from "expo-constants";
import { get } from "lodash";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

import globalStyles from "../theme/global-styles";
import { GET_ME, UPDATE_PUSH_TOKEN, GET_VARIABLES } from "./user.queries";

const getPushTokenAsync = () => new Promise((resolve, reject) => {
  Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status !== "granted") {
        reject(new Error("Notification permissions not granted"));
      } else {
        Notifications.getExpoPushTokenAsync()
          .then((token) => resolve(token))
          .catch(reject);
      }
    });
});

const registerForLocalNotification = () =>
  Notifications.addListener(({ data }) => {
    if (data.message || data.title) {
      Notifications.presentLocalNotificationAsync({
        title: data.title,
        body: data.message || data.body,
        ios: { sound: true, _displayInForeground: true },
      });
    }
  });

const LoadingScreen = ({ navigation, client }) => {
  const { data } = useQuery(GET_ME, {
    onError: (err) => {
      if (get(err, "networkError.statusCode") === 401 || (get(err, "graphQLErrors[0].message") || "").endsWith("NotFound")) {
        return navigation.navigate("auth");
      }
      console.log(err);
      return Alert.alert(err.message);
    },
    onCompleted: async () => {
      if (data) {
        await client.query({ query: GET_VARIABLES });
        getPushTokenAsync()
          .then((token) => client.mutate({ mutation: UPDATE_PUSH_TOKEN, variables: { token } }))
          .then(() => registerForLocalNotification())
          .finally(() => navigation.navigate(Constants.manifest.extra.mode));
      }
    },
  });

  return (
    <View style={globalStyles.fullContainerCentered}>
      <ActivityIndicator />
    </View>
  );
};

export default withApollo(withNavigation(LoadingScreen));
