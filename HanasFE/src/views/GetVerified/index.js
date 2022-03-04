import { StyleSheet, StatusBar, Text, View } from "react-native";
import React from "react";
import { colors, margin, fontSize, padding } from "@constants";
import { Icon } from "react-native-elements";

const GetVerified = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Icon color="green" name="verified" />
          <Text style={styles.headerText}>Get Verified</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            To help keep Hanas a trusted service market place, to ensure safety
            and for you to enjoy incentives, we need you to submit a photo of
            your valid ID and NBI or Barangay Clearance.
          </Text>
          <Text style={styles.descriptionText}>
            You will receive a notification once your ID and NBI or Barangay
            Clearance has been verified.
          </Text>
          <Text style={styles.descriptionText}>
            You will then get a green verified badge
            <Icon color="green" size={14} name="verified" />
          </Text>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text>These are the list of accepted ID's</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.text}>
              UMID{"\n"}SSS{"\n"}Passport{"\n"}Driver's License{"\n"}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.text}>
              Voter's ID{"\n"}PRC ID{"\n"}Postal ID{"\n"}HDMF ID{"\n"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetVerified;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  header: {
    margin: margin.m5,
    backgroundColor: colors.white,
    width: "75%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: padding.p5,
  },
  headerText: {
    marginHorizontal: margin.m1,
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  descriptionContainer: {
    alignItems: "center",
  },
  description: {
    justifyContent: "center",
    width: "75%",
  },
  descriptionText: {
    fontSize: fontSize.h4,
    marginVertical: 3,
  },
  tableContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  table: {
    flexDirection: "row",
    paddingTop: padding.p2,
    paddingHorizontal: padding.p2,
    width: "65%",
    flexWrap: "wrap",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  tableHeader: {
    alignSelf: "flex-start",
    marginBottom: margin.m1,
  },
  tableRow: {
    width: "50%",
  },
  text: {
    color: "grey",
    lineHeight: 20,
  },
});
