import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const SampleWorks = () => {
  return (
    <View style={[styles.infoContainer, styles.mt5]}>
      <View style={[styles.flexRowContainer, styles.alignCenter, styles.mb2]}>
        <Text style={[styles.p, styles.grey, styles.bold]}>Sample Works</Text>
        <TouchableOpacity
          style={[styles.flexRowContainer, styles.alignCenter, styles.p3]}
        >
          <Icon
            name="add-circle-outline"
            type="ionicons"
            color={colors.secondary}
            size={18}
          />
          <Text style={[styles.secondary, styles.p, styles.bold]}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewHeight}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.scrollContent}>
            <TouchableOpacity style={styles.sampleWorkIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.sampleWorkIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.sampleWorkIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.sampleWorkIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SampleWorks;
