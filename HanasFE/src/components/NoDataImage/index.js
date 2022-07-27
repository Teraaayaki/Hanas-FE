import { Image, Text, View } from "react-native";
import React from "react";

import styles from "./style";

const NoDataImage = ({
  title = "Oopsie!",
  subtitle = "No Data Found.",
  onPress,
  refresh = false,
  refreshTitle = "Refresh Me",
}) => {
  return (
    <View style={styles.center}>
      <Image style={styles.image} source={require("@images/hanasNoData.png")} />
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.text}>
        {subtitle}{" "}
        {refresh && (
          <Text onPress={onPress} style={styles.refreshText}>
            {refreshTitle}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default NoDataImage;
