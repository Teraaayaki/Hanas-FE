import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "@components/Button";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Landing")} title="GO BACK" />
    </View>
  );
};

export default Dashboard;
