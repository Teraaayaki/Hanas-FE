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

import Button from "@components/Button";
import IconField from "@components/form/IconField";
import styles from "./style";

const details = {
  dob: new Date(2004, 11, 31),
  address: "",
  sex: "",
};

export default function RegisterDetailsPageTwo({ navigation }) {
  const [errMessage, setErrMessage] = useState("");
  const [dateModal, setDateModal] = useState(false);
  const [userDetails, setUserDetails] = useState(details);

  const changeDate = (e, dob) => {
    setDateModal(false);
    dob && setUserDetails({ ...userDetails, dob });

    //set address
    setUserDetails({ ...userDetails, address: "Bogo City, Cebu" });
    console.log("birthdate changed " + userDetails.dob);
  };

  const handleChangeSex = (sex) => {
    setUserDetails({ ...userDetails, sex });
  };

  const handleSubmit = () => {
    if (userDetails.address === "" || userDetails.sex === "") {
      setErrMessage("Incomplete Data");
    } else {
      setErrMessage("");
      navigation.navigate("GetVerified");
    }
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
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Address</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SetLocation")}>
          <IconField
            iconName="location-pin"
            iconType="material-icons"
            iconSize={25}
            keyboardType={"default"}
            placeholder={"Cebu, City"}
            editable={false}
            value={userDetails.address}
          />
        </TouchableOpacity>

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
        {dateModal && (
          <DateTimePicker
            mode="date"
            value={userDetails.dob}
            display="calendar"
            onChange={changeDate}
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date(2004, 11, 31)}
          />
        )}

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
            <Icon type="material-community" name="gender-male" color="blue" />
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{errMessage}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <>
            <Button title="SUBMIT" onPress={handleSubmit} />
          </>
        </View>
      </ScrollView>
      {/* <View style={styles.bottomContainer}>
     
      </View> */}
    </SafeAreaView>
  );
}
