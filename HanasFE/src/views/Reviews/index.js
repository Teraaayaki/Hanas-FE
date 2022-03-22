import { View, Text, Image } from "react-native";
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
          <Text style={styles.ratingText}>Overall Rating</Text>
          <Text style={styles.fadeTextValues}><Image source={require("@images/star.png")} style={{height: 13, width: 13}}/> 4.5/5</Text>
          <DropdownPicker />
        </View>
        {/* <TransactionFlatlist navigation={navigation}/> */}
    </View>
  );
};

export default Reviews;
