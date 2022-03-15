import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const InfoCard = ({ navigation, serviceType, ratePerHour, description }) => {
  return (
    <View style={[styles.infoCard, styles.mt5, styles.p5]}>
      <View style={[styles.flexRowContainer, styles.f1]}>
        <View style={[styles.infoColumn, styles.f1]}>
          <Text style={[styles.text10, styles.grey]}>Service Type</Text>
          <Text style={styles.text12}>{serviceType}</Text>
        </View>
        <View style={[styles.flexRowContainer, styles.f1, styles.ml5]}>
          <View style={[styles.infoColumn, styles.f2, styles.mr5]}>
            <Text style={[styles.text10, styles.grey]}>Rate Per Hour</Text>
            <Text style={styles.text12}>{ratePerHour} PHP</Text>
          </View>
          <TouchableOpacity>
            <View style={[styles.infoColumn, styles.alignCenter]}>
              <View
                style={[
                  styles.borderSecondary,
                  styles.rounded,
                  styles.h100,
                  styles.square,
                  styles.alignCenter,
                  styles.justifyContentCenter,
                ]}
              >
                <Icon
                  name="pen"
                  type="font-awesome-5"
                  color={colors.secondary}
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
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
