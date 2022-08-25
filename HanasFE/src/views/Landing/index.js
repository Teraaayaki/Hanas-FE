import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";

import { resetError } from "@redux/actions/registerActions";
import { userLogin } from "@redux/actions/authActions";
import Button from "@components/Button";
import Loading from "@components/Loading";
import styles from "./style";

const Landing = ({ navigation }) => {
  const { success, loading } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const handleGuestNavigate = () => {
    navigation.navigate("GuestDashboard");
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);

  useEffect(() => {
    dispatch(userLogin(navigation));
    if (success) {
      console.log("User Currently is LoggedIn");
    } else {
      console.log("User Currently is not LoggedIn");
    }
  }, [success]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading title="Fetching User Data" />
      ) : (
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("@images/hanasLogoSquared.png")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.pinkButtonContainer}>
              <Button
                onPress={() => navigation.navigate("RegisterClientWorker")}
                title="REGISTER"
              />
            </View>
            <View style={styles.pinkButtonContainer}>
              <Button
                onPress={() => navigation.navigate("Login")}
                title="LOGIN"
              />
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text} onPress={handleGuestNavigate}>
              Skip for now
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Landing;
