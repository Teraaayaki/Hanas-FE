import { Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

import styles from "./style";
import { colors } from "@constants";

const GetVerified = ({ navigation }) => {
  return (
    <View style={styles.getVerifiedContainer}>
      <View style={styles.getVerifiedTextContainer}>
        <Text style={styles.headingText}>Get Verified Now! </Text>
        <Text style={styles.getVerifiedTextBody}>
          Only 1 Valid ID and an NBI or Brgy. Clearance needed! Verified users
          can perform services and earn money.
        </Text>
        <Button
          buttonStyle={{ backgroundColor: colors.secondary }}
          title="Get Verified Now"
          onPress={() => navigation.navigate("GetVerified")}
        />
      </View>
      <View>
        <Image
          style={styles.getVerifiedImageContainer}
          source={require("@images/steff2.png")}
        />
      </View>
    </View>
  );
};

export default GetVerified;
