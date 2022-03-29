import { View, Text, Image } from "react-native";
import {Icon} from "react-native-elements";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";
import ReviewsFlatlist from "@components/flatlist/ReviewsFlatlist";
import style from "../../components/LightHeaderWithHanas/style";

const Reviews = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Reviews" />
        <View style={styles.textContainer}>
          <Text style={styles.ratingText}>Overall Rating</Text>
          <View style={styles.ratingContainer}>
            <Icon color="#FFD706" size={22} name="star" />
            <Text style={styles.fadeTextValues}>4.5/5</Text>
          </View>
          <DropdownPicker />
        </View>
        <ReviewsFlatlist navigation={navigation}/>
    </View>
  );
};

export default Reviews;
