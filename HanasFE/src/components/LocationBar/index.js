import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./style";

const index = ({ onPress, location = "Cebu City" }) => {
  return (
    <TouchableOpacity style={styles.location} onPress={onPress}>
      <Text style={styles.text}>
        <Image source={require("@images/marker.png")} style={styles.pin} />
        {"  "}
        {location}
      </Text>
    </TouchableOpacity>
  );
};

export default index;
