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
      <View className={styles.flexRow}>
        <View>
          <Text className={styles.h1}>Choose a Service</Text>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default AddEditService;
