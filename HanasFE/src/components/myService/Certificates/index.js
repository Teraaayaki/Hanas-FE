import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const Certificates = () => {
  return (
    <View style={[styles.infoContainer, styles.mt5]}>
      <View style={[styles.flexRowContainer, styles.alignCenter, styles.mb2]}>
        <Text style={[styles.p, styles.grey, styles.bold]}>Certificates</Text>
        <TouchableOpacity
          style={[styles.flexRowContainer, styles.alignCenter, styles.p3]}
        ></TouchableOpacity>
      </View>
      <View style={styles.scrollViewHeight}>
        <ScrollView horizontal={true} style={[styles.scrollView]}>
          <View style={styles.scrollContent}>
            <TouchableOpacity style={styles.certificateIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.certificateIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.certificateIMGCard}>
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity style={styles.certificateIMGCard}>
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

export default Certificates;
