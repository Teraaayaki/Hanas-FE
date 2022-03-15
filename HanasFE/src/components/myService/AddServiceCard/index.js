import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const AddServiceCard = ({ navigation, ID }) => {
  return (
    <View style={styles.m5}>
      <Text style={[styles.p, styles.grey, styles.bold]}>Service {ID}</Text>
      <View style={[styles.infoCard, styles.mt5, styles.p10]}>
        <TouchableOpacity>
          <View
            style={[
              styles.addButton,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.rounded,
              styles.flexRowContainer,
            ]}
          >
            <Icon
              name="add-circle-outline"
              type="ionicons"
              color={colors.secondary}
              size={30}
              style={styles.mr5}
            />
            <Text style={[styles.textCenter, styles.my5, styles.h2]}>
              Add Another Service
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddServiceCard;
