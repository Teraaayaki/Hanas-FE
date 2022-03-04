import React from "react";
import { StatusBar, StyleSheet, Image, Text, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { margin, fontSize, colors, padding } from "@constants";
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
        <View style={styles.inputContainer}>
          <Input
            inputContainerStyle={styles.input}
            placeholder="Search for Address..."
            leftIcon={<Icon name="search" size={24} color={colors.dark} />}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            inputContainerStyle={styles.input}
            placeholder="Use Current Location..."
            leftIcon={<Icon name="explore" size={24} color={colors.dark} />}
          />
        </View>
        <View style={styles.btnInputContainer}>
          <Button title="SET LOCATION" />
        </View>
      </View>
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
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
    marginTop: "-50%",
    paddingTop: 50,
    elevation: 50,
  },
  btnInputContainer: {
    width: "75%",
    height: "60%",
    // marginTop: 25,
  },
  inputContainer: {
    width: "80%",
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: colors.white,
    paddingHorizontal: padding.p2,
    borderRadius: 5,
  },
});
