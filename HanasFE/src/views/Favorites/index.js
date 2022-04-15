import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";

const Favorites = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <View style={styles.textContainer}>
        <TypeOfService title={"Electrical Services"} />
        <DropdownPicker />
      </View>
      <CardContainerFlatlist navigation={navigation} />
    </View>
  );
};

export default Favorites;
