import {
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, margin, fontSize, padding } from "@constants";
import Button from "@components/Button";
import { Icon } from "react-native-elements";

const GetVerified = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Icon color="green" size={30} name="verified" />
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

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.textLink}>Valid ID</Text>
          <View style={styles.fileInputContainer}>
            <TouchableOpacity style={styles.regularButton} title="Browse">
              <Text style={styles.browseText}>Browse</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              editable={false}
              placeholder="filename.pdf"
            />
          </View>
          <Text style={styles.textLow}>
            Please make sure that ID is clear enough
          </Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.textLink}>NBI or Barangay Clearance</Text>
          <View style={styles.fileInputContainer}>
            <TouchableOpacity style={styles.regularButton} title="Browse">
              <Text style={styles.browseText}>Browse</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              editable={false}
              placeholder="filename.pdf"
            />
          </View>
          <Text style={styles.textLow}>
            Please make sure that your NBI or Brgy Clearance is still valid.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="SUBMIT" />
          <View style={styles.textLinkContainer}>
            <TouchableOpacity>
              <Text style={styles.textLink}>Later</Text>
            </TouchableOpacity>
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
    marginTop: margin.m5,
    marginHorizontal: margin.m5,
    marginBottom: margin.m2,
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
  inputContainer: {
    marginTop: margin.m1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginVertical: margin.m3,
    width: "75%",
  },
  fileInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: padding.p1,
  },
  regularButton: {
    backgroundColor: colors.lightGrey,
    padding: padding.p2,
    borderRadius: 5,
  },
  browseText: {
    color: colors.black,
    fontSize: fontSize.h3,
  },
  textInput: {
    marginLeft: margin.m1,
  },
  textLow: {
    color: "darkgrey",
    fontSize: fontSize.p,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: margin.m3,
  },
  button: {
    width: "75%",
  },
  textLinkContainer: {
    marginTop: margin.m4,
    alignItems: "center",
  },
  textLink: {
    color: colors.dark,
    fontSize: fontSize.h4,
    fontWeight: "bold",
  },
});
