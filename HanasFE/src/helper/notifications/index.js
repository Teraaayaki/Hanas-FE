import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import axios from "@helpers/axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const getPermissions = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert(
        "Enable push notifications for the best experience while using the app."
      );
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    // Save to user database logic
  } else {
    alert("Must use a physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};

export const sendNotification = (expoToken, title, body) =>
  new Promise((res, rej) => {
    axios
      .post(
        "https://exp.host/--/api/v2/push/send",
        {
          to: expoToken,
          title,
          body,
        },
        {
          headers: {
            host: "exp.host",
            accept: "application/json",
            "accept-encoding": "gzip, deflate",
            "content-type": "application/json",
          },
        }
      )
      .then((response) => res(response))
      .catch((err) => rej(err));
  });
