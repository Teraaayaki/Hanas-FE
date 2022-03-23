import React, { useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

import axios from "@axios";
import Button from "@components/Button";
import IconField from "@components/form/IconField";
import styles from "./style";

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

const details = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  suffix: "",
};

export default function RegisterDetailsPageOne({ navigation }) {
  const handleSubmit = async () => {
    navigation.navigate("RegisterDetailsPageTwo");
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>User Details</Text>
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email</Text>
        </View>
        <IconField
          iconName="mail"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"sample@email.com"}
          autoCapitalize="none"
          // value={userDetails.email}
          // onChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
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
          autoCapitalize="none"
          secureTextEntry={true}
          // value={userDetails.password}
          // onChangeText={(e) => setUserDetails({ ...userDetails, password: e })}
        />

        <View style={styles.labelContainer}>
          <Text style={styles.label}>First Name</Text>
        </View>
        <IconField
          iconName="person-outline"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"default"}
          placeholder={"John"}
          // value={userDetails.firstName}
          // onChangeText={(e) => setUserDetails({ ...userDetails, firstName: e })}
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
              // value={userDetails.middleName}
              // onChangeText={(e) =>
              //   setUserDetails({ ...userDetails, middleName: e })
              // }
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
              // value={userDetails.suffix}
              // onChangeText={(e) =>
              //   setUserDetails({ ...userDetails, suffix: e })
              // }
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
          // value={userDetails.lastName}
          // onChangeText={(e) => setUserDetails({ ...userDetails, lastName: e })}
        />

        <View style={styles.buttonContainer}>
          <Button title="NEXT" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
