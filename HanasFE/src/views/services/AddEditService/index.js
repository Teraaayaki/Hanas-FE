import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

import Header from "@components/Header";

//Containers are invisible
//Cards are visible

const AddEditService = ({ navigation }) => {
  return (
    <ScrollView style={styles.body}>
      <Header title="Add/Edit Service Page" />
    </ScrollView>
  );
};

export default AddEditService;
