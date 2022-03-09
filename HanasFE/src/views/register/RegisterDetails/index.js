import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import Button from "@components/Button";
import IconField from "@components/form/IconField";

import styles from "./style";

export default function RegisterDetails({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [password, setPassword] = useState("");
  const [suffix, setSuffix] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [isWorker, setIsWorker] = useState("");
  const [mobileNo, setMobileNo] = useState("09658584333");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>User Details</Text>
      <View style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>First Name</Text>
        </View>
        <IconField
          iconName="person-outline"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"John"}
          value={firstName}
        />
        <View style={styles.inputRow}>
          <View style={styles.rowContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Middle Name</Text>
            </View>
            <IconField
              iconName="person-outline"
              iconType="ionicons"
              iconSize={25}
              keyboardType={"default"}
              placeholder={"Lumberg"}
              value={middleName}
            />
          </View>

          <View style={styles.rowContainer2}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Suffix</Text>
            </View>
            <IconField
              iconName="person-outline"
              iconType="ionicons"
              iconSize={25}
              keyboardType={"default"}
              placeholder={"Jr. , III"}
              value={suffix}
            />
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Last Name</Text>
        </View>
        <IconField
          iconName="person-outline"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"Doe"}
          value={lastName}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Date of Birth</Text>
        </View>
        <IconField
          iconName="calendar"
          iconType="entypo"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"02/3/2022"}
          value={dob}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Gender</Text>
        </View>
        <View style={styles.inputRow}>
          <View
            style={{ ...styles.genderContainer, backgroundColor: "lightpink" }}
          >
            <Icon
              type="material-community"
              name="gender-female"
              color="violet"
            />
          </View>
          <View
            style={{ ...styles.genderContainer, backgroundColor: "lightpink" }}
          >
            <Icon type="material-community" name="gender-male" color="blue" />
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Address</Text>
        </View>
        <IconField
          iconName="location-pin"
          iconType="material-icons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"Cebu, City"}
          value={address}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password</Text>
        </View>
        <IconField
          iconName="lock"
          iconType="material-community-icons"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"************"}
          value={password}
        />
        <View style={{ height: 20 }}></View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("SetLocation")}
        />
      </View>
    </SafeAreaView>
  );
}
