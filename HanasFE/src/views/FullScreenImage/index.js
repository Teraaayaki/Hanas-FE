import React from "react";
import { View } from "react-native";
import styles from "./styles";

import Header from "@components/Header";

//Containers are invisible
//Cards are visible

const AddEditService = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Header title="Temporary Fullscreen Image Page" />
    </View>
  );
};

export default AddEditService;
