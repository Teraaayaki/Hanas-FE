import { Text, Image, View } from "react-native";
import React from "react";

import styles from "./style";

const NoWorkerGraphic = ({ model = "steve", text }) => {
  return (
    <View>
      {model === "steve" ? (
        <Image
          style={styles.noWorkerImage}
          source={require("@images/steve.png")}
        />
      ) : (
        <Image
          style={styles.noWorkerImage}
          source={require("@images/steff.png")}
        />
      )}
      <View style={styles.noWorkerTextBox}>
        <Text style={styles.noWorkerText}>{text}</Text>
      </View>
    </View>
  );
};

export default NoWorkerGraphic;
