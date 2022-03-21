import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "@axios";

import Button from "@components/Button";
import IconField from "@components/form/IconField";
import styles from "./style";

export default function RegisterDetails({ navigation }) {
  const [pageOne, setPageOne] = useState(false);
  const [errMessage, setErrMessage] = useState(true);
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
  const [email, setEmail] = useState("renzolebumfacil@gmail.com");

  const handleChangeSex = (sex) => {
    setSex(sex);
  };

  const handleSubmit = async () => {
    const valid = false;

    !firstName ? setErrMessage(true) : null;

    // await axios
    //   .get("/")
    //   .then((res) => console.log(res.data.mess))
    //   .catch((err) => err);

    // method:'post',
    // url: '/api/client/register',
    // data: {
    // first_name: firstName,
    // middle_name: middleName,
    // family_name: lastName,
    // suffix: suffix,
    // email: email,
    // password: password,
    // mobile_no: mobileNo,
    // address: address,
    // birthdate: dob,
    // gender: sex,
    // is_worker: isWorker,
    // }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>User Details</Text>
      </View>
      <ScrollView style={styles.formContainer}>
        {!pageOne ? (
          <>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Email</Text>
            </View>
            <IconField
              iconName="mail"
              iconType="ionicons"
              iconSize={25}
              keyboardType={"default"}
              placeholder={"sample@email.com"}
              value={middleName}
              onChangeText={(e) => setMiddleName(e)}
            />

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
          </>
        ) : (
          <>
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
                  backgroundColor: sex === "female" ? "lightpink" : "white",
                }}
                onPress={() => handleChangeSex("female")}
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
                  backgroundColor: sex === "male" ? "lightpink" : "white",
                }}
                onPress={() => handleChangeSex("male")}
              >
                <Icon
                  type="material-community"
                  name="gender-male"
                  color="blue"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        {errMessage ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>Incomplete Data Inputted</Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          {!pageOne ? (
            <Button title="NEXT" onPress={() => setPageOne(!pageOne)} />
          ) : (
            <>
              <Button
                title="SUBMIT"
                onPress={() => navigation.navigate("SetLocation")}
              />
              <TouchableOpacity onPress={() => setPageOne(!pageOne)}>
                <View style={styles.touchable}>
                  <Text style={styles.touchableText}>Back</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
