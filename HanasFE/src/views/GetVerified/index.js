import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import Button from "@components/Button";
import { Icon } from "react-native-elements";
import styles from "./style";

const GetVerified = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Icon color="green" size={30} name="verified" />
            <Text style={styles.headerText}>Get Verified</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              To help keep Hanas a trusted service market place, to ensure
              safety and for you to enjoy incentives, we need you to submit a
              photo of your valid ID and NBI or Barangay Clearance.
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
            <Text style={styles.label}>Valid ID</Text>
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
            <Text style={styles.label}>NBI or Barangay Clearance</Text>
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
            <Button
              title="SUBMIT"
              onPress={() => navigation.navigate("Dashboard")}
            />
            <View style={styles.textLinkContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterDetailsPageTwo")}
              >
                <Text style={styles.textLink}>Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetVerified;
