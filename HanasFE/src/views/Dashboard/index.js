import * as React from "react";
import { View } from "react-native";
import Button from "@components/Button";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Landing")} title="GO BACK" />
    </View>
  );
};

export default Dashboard;
