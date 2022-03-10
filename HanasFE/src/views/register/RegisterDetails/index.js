import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Button from "@components/Button";
import IconField from "@components/form/IconField";

import styles from "./style";
import axios from '@helpers/axios';

export default function RegisterDetails({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [password, setPassword] = useState("");
  const [suffix, setSuffix] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [isWorker, setIsWorker] = useState(true);
  const [mobileNo, setMobileNo] = useState("09658584333");
  const [email, setEmail] = useState("");

  const handleChangeSex = (sex) => {
    setGender(sex);
  };

  const handleSubmit = async() => {
    await axios.post({
      method:'post',
      url: '/api/client/register',
      data: {
      first_name: firstName,
      middle_name: middleName,
      family_name: lastName,
      suffix: suffix,
      email: email,
      password: password,
      mobile_no: mobileNo,
      address: address,
      birthdate: dob,
      sex: sex,
      is_worker: isWorker,
      }
    }).then(res => console.log(res))
      .catch(err => console.log(err))
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
          onChangeText={(e) => setFirstName(e)}
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
              onChangeText={(e) => setMiddleName(e)}
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
              onChangeText={(e) => setSuffix(e)}
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
          onChangeText={(e) => setLastName(e)}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Gender</Text>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity
            style={{
              ...styles.genderContainer,
              backgroundColor: gender === "female" ? "lightpink" : "white",
            }}
            onPress={() => handleChangeGender("female")}
          >
            <Icon
              type="material-community"
              name="gender-female"
              color="violet"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.genderContainer,
              backgroundColor: gender === "male" ? "lightpink" : "white",
            }}
            onPress={() => handleChangeGender("male")}
          >
            <Icon type="material-community" name="gender-male" color="blue" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.rowContainer}>
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
              onChangeText={(e) => setAddress(e)}
            />
          </View>
          <View style={styles.rowContainer2}>
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
              onChangeText={(e) => setDob(e)}
            />
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password</Text>
        </View>
        <IconField
          iconName="lock"
          iconType="material-community-icons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"************"}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <View style={{ height: 20 }}></View>
        <Button title="SEND" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
