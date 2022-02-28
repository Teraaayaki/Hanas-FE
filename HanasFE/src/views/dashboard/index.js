import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import styles from "../dashboard/style";

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LinearGradient
          colors={["#e69fb4", "#ff5e84"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text style={styles.buttonText}>Go to Profile</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

export default Dashboard;
