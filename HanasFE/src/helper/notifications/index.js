import * as Notifications from "expo-notfications";
import Device from "expo-device";
import { setItem } from "@helpers/asyncStorage";

export const getPermissions = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Enable push notifications to use the app.");
      setItem("expopushtoken", "");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    setItem("expopushtoken", token);
  } else {
    alert("Must use a physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationsChannelAsync("default", {
      name: "default",
      importance: Notifications.setNotifications.AndroidImportance.Max,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};
