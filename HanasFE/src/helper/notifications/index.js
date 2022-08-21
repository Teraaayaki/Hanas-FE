import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const getPermissions = async () => {
  if (!Device.isDevice) {
    alert("Must use a physical device for Push Notifications");
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  console.log(finalStatus);

  if (finalStatus === "granted") {
    // Save to user database logic
    try {
      const token = (await Notifications.getExpoPushTokenAsync()).data;

      const jwt = await getItem("token");

      await axios.post(
        "/api/notifications/",
        { token },
        { headers: { Authorization: `Bearer ${jwt}` } },
      );

      return;
    } catch (err) {
      console.log(err);
    }

    alert("Enable push notifications for the best experience while using the app.");
    return;
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
        },
      )
      .then((response) => res(response))
      .catch((err) => rej(err));
  });
