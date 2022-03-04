import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { margin, fontSize } from "@constants";

const SetLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.text}>Set Location</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Text>Lobot</Text>
      </View>

      <View style={styles.selectContainer}>
        <Text style={styles.selectContainerText}>Lobot</Text>
      </View>
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: "grey",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  headerText: {
    margin: margin.m3,
  },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  mapContainer: {
    backgroundColor: "yellow",
    flex: 2,
  },
  selectContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "red",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    marginTop: "-60%",
  },
  selectContainerText: {
    fontSize: fontSize.h1,
  },
});
