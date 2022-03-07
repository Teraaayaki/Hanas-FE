import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  StatusBar,
  Text,
  Button,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors, margin, padding, fontSize } from "@constants";

const Profile = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
      >
        <View style={styles.headerText}>
          <Text style={styles.text}>Profile</Text>
        </View>
        <View style={styles.headContainer}>
          <Image style={styles.image} source={require("@images/mullet.jpg")} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Soy Lebumfacil</Text>
            <Text style={styles.verified}>
              <Icon color="green" size={fontSize.h3} name="verified" /> Verified
            </Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.profileDetails}>
          <Text>Profile Page</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: padding.p30,
  },
  headerText: {
    alignItems: "center",
    marginTop: margin.m3,
    marginBottom: margin.m2,
  },
  text: {
    fontSize: fontSize.h1,
  },
  image: {
    borderRadius: 70 / 2,
    resizeMode: "cover",
    height: 70,
    width: 70,
  },
  headContainer: {
    flexDirection: "row",
    marginLeft: margin.m6,
  },
  nameContainer: {
    marginLeft: margin.m2,
  },
  name: {
    fontSize: fontSize.profileName,
    fontWeight: "bold",
    elevation: 10,
  },
  verified: {
    color: colors.white,
    fontSize: fontSize.h3,
  },
});
