import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const SampleWorks = ({ navigation }) => {
  return (
    <View style={[styles.infoContainer, styles.mt5]}>
      <View style={[styles.flexRowContainer, styles.alignCenter, styles.mb2]}>
        <Text style={[styles.p, styles.grey, styles.bold, styles.mx4]}>
          Sample Works
        </Text>
      </View>
      <View style={styles.scrollViewHeight}>
        <ScrollView horizontal={true} style={[styles.scrollView]}>
          <View style={[styles.scrollContent, styles.SWpadding]}>
            <TouchableOpacity
              style={styles.sampleWorkIMGCard}
              onPress={navigation}
            >
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity
              style={styles.sampleWorkIMGCard}
              onPress={navigation}
            >
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity
              style={styles.sampleWorkIMGCard}
              onPress={navigation}
            >
              <Image
                style={styles.containedIMG}
                source={require("@images/mullet.jpg")}
              />
            </TouchableOpacity>
            <View style={{ padding: "1%" }}></View>
            <TouchableOpacity
              style={styles.sampleWorkIMGCard}
              onPress={navigation}
            >
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
