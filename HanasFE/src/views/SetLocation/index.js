import React from "react";
import { StatusBar, StyleSheet, Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { margin, fontSize, colors } from "@constants";
import Button from "@components/Button";

const SetLocation = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
      >
        <View style={styles.headerText}>
          <Text style={styles.text}>Set Location</Text>
        </View>
      </LinearGradient>

      <View style={styles.mapContainer}>
        <Image style={styles.image} source={require("@images/maps.jpg")} />
      </View>

      <View style={styles.selectContainer}>
        <Button title="Set Location" />
      </View>
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  headerText: {
    marginTop: margin.m3,
    marginBottom: margin.m2,
  },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 2,
  },
  image: {
    resizeMode: "contain",
  },
  selectContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.lightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    marginTop: "-60%",
    elevation: 3,
  },
  selectContainerText: {
    fontSize: fontSize.h1,
  },
});
