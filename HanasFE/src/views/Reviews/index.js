import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";

const Reviews = () => {
  return (
    <View style={styles.container}>
      <Header title="Reviews" />
        <View style={styles.textContainer}>
          <TypeOfService title={"September, 2021"} />
          <DropdownPicker />
        </View>
        <TransactionFlatlist navigation={navigation}/>
    </View>
  );
};

export default Reviews;
