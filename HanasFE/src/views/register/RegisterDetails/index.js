import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

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
  dob: new Date(),
  address: "",
  sex: "",
};

export default function RegisterDetails({ navigation }) {
  const [pageOne, setPageOne] = useState(false);
  const [errMessage, setErrMessage] = useState("Error hehe");
  const [dateModal, setDateModal] = useState(false);

  const [userDetails, setUserDetails] = useState(details);

  const changeDate = (e, dob) => {
    setUserDetails({ ...userDetails, dob });
    setDateModal(false);
    console.log("birthdate changed");
  };

  const handleChangeSex = (sex) => {
    setUserDetails({ ...userDetails, sex });
  };

  const handleSubmit = async () => {
    // const valid = false;
    // !firstName ? setErrMessage(true) : null;
    console.log(userDetails);
  };

  useEffect(() => {
    console.log("Date " + userDetails.dob);
    console.log("Date Valid " + dayjs(userDetails.dob).isValid());
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>User Details</Text>
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
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
              value={userDetails.email}
              onChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
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
              secureTextEntry={true}
              value={userDetails.password}
              onChangeText={(e) =>
                setUserDetails({ ...userDetails, password: e })
              }
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
              editable={false}
              value={userDetails.address}
            />

            <View style={styles.labelContainer}>
              <Text style={styles.label}>Date of Birth</Text>
            </View>
            <TouchableOpacity onPress={() => setDateModal(true)}>
              <IconField
                iconName="calendar"
                iconType="entypo"
                iconSize={25}
                editable={false}
                keyboardType={"default"}
                placeholder={"02/3/2022"}
                value={dayjs(userDetails.dob).format("MMMM D, YYYY")}
              />
            </TouchableOpacity>
            {dateModal ? (
              <DateTimePicker
                mode="date"
                value={userDetails.dob}
                display="calendar"
                onChange={changeDate}
              />
            ) : null}
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
              value={userDetails.firstName}
              onChangeText={(e) =>
                setUserDetails({ ...userDetails, firstName: e })
              }
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
                  value={userDetails.middleName}
                  onChangeText={(e) =>
                    setUserDetails({ ...userDetails, middleName: e })
                  }
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
                  value={userDetails.suffix}
                  onChangeText={(e) =>
                    setUserDetails({ ...userDetails, suffix: e })
                  }
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
              value={userDetails.lastName}
              onChangeText={(e) =>
                setUserDetails({ ...userDetails, lastName: e })
              }
            />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Gender</Text>
            </View>
            <View style={styles.inputRow}>
              <TouchableOpacity
                style={{
                  ...styles.genderContainer,
                  backgroundColor:
                    userDetails.sex === "female" ? "lightpink" : "white",
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
                  backgroundColor:
                    userDetails.sex === "male" ? "lightpink" : "white",
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
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{errMessage}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {!pageOne ? (
            <Button title="NEXT" onPress={() => setPageOne(!pageOne)} />
          ) : (
            <>
              <Button title="SUBMIT" onPress={handleSubmit} />
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
