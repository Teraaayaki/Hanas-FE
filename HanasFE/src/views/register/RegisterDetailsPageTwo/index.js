import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

import Button from "@components/Button";
import IconField from "@components/form/IconField";
import Loading from "@components/Loading";
import styles from "./style";
import { registerUser } from "@redux/actions/registerActions";

const details = {
  dob: new Date(2004, 11, 31),
  sex: "",
};

export default function RegisterDetailsPageTwo({ navigation }) {
  const [errMessage, setErrMessage] = useState("");
  const [dateModal, setDateModal] = useState(false);
  const [userDetails, setUserDetails] = useState(details);
  const { address, user, isWorker, number, loading, error } = useSelector(
    (state) => state.userRegister
  );
  const dispatch = useDispatch();

  const changeDate = (e, dob) => {
    setDateModal(false);
    dob && setUserDetails({ ...userDetails, dob });
    console.log("birthdate changed " + userDetails.dob);
  };

  const handleChangeSex = (sex) => {
    setUserDetails({ ...userDetails, sex });
  };

  const handleSubmit = () => {
    if (address === "" || userDetails.sex === "") {
      setErrMessage("Incomplete Data");
    } else {
      setErrMessage("");
      let completeUserDetails = {
        ...user,
        address,
        number,
        isWorker,
        dob: userDetails.dob,
        sex: userDetails.sex,
      };
      dispatch(registerUser(completeUserDetails, navigation));
    }
  };

  useEffect(() => {
    setErrMessage(error);
  }, [error]);

  return (
    <SafeAreaView style={styles.body}>
      {loading ? (
        <Loading title="Registering User..." />
      ) : (
        <>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("SetLocation")}
            >
              <IconField
                iconName="location-pin"
                iconType="material-icons"
                iconSize={25}
                keyboardType={"default"}
                placeholder={"Cebu City, Cebu"}
                editable={false}
                value={address}
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
                    userDetails.sex === "Female" ? "lightpink" : "white",
                }}
                onPress={() => handleChangeSex("Female")}
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
                    userDetails.sex === "Male" ? "lightpink" : "white",
                }}
                onPress={() => handleChangeSex("Male")}
              >
                <Icon
                  type="material-community"
                  name="gender-male"
                  color="blue"
                />
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
        </>
      )}
    </SafeAreaView>
  );
}
