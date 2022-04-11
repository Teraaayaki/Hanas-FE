import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const InfoCard = ({ serviceType, ratePerHour, description }) => {
  return (
    <View style={[styles.infoCard, styles.mt5, styles.mx4, styles.p5]}>
      <View style={[styles.flexRowContainer, styles.f1]}>
        <View style={[styles.flexRowContainer, styles.f1s]}>
          <View style={[styles.infoColumn, styles.f1]}>
            <Text style={[styles.text10, styles.grey]}>Rate Per Hour</Text>
            <Text style={styles.text12}>{ratePerHour} PHP</Text>
          </View>
        </View>
      </View>
      <View style={[styles.infoColumn, styles.mt3]}>
        <Text style={[styles.text10, styles.grey]}>Description</Text>
        <Text style={[styles.text12, styles.textJustify]}>{description}</Text>
      </View>
    </View>
  );
};

export default InfoCard;
