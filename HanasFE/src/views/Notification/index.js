import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import NotificationFlatlist from "@components/flatlist/NotificationFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropdownPickerNotification";

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Notification" />
      <NotificationFlatlist navigation={navigation} />
    </View>
  );
};

export default Notification;
