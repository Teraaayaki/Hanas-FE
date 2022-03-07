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
import TextLinkPink from "@components/TextLinkPink";
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
      <ScrollView
        style={styles.profileDetails}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.accountInfoContainer}>
          <Text style={styles.infoHeader}>Account Info</Text>
          <View style={styles.headerBorder}></View>
          <View style={styles.accountInfo}>
            <Text style={styles.infoText}>
              Address:{"\n"}Email:{"\n"}Mobile Number:
            </Text>
            <Text style={styles.infoText}>
              Info{"\n"}Info{"\n"}Info
            </Text>
          </View>
          <View style={styles.headerBorder}></View>
          <View style={styles.textLink}>
            <TextLinkPink title="Edit Account Info" />
            <TextLinkPink title="Edit Password" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text>Buttons</Text>
        </View>
        <Text>Logout</Text>
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
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
    marginLeft: margin.m3,
    marginTop: margin.m5,
  },
  name: {
    fontSize: fontSize.profileName,
    fontWeight: "bold",
    elevation: 10,
  },
  verified: {
    color: colors.white,
    fontSize: fontSize.h3,
    elevation: 10,
  },
  profileDetails: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: "hidden",
    marginTop: "-120%",
    padding: padding.p5,
  },
  accountInfoContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: colors.borderGrey,
    borderWidth: 1,
    padding: padding.p5,
    marginTop: margin.m6,
  },
  accountInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: margin.m5,
  },
  buttonContainer: {
    backgroundColor: "red",
  },
  headerBorder: {
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: 1,
  },
  infoHeader: {
    fontSize: fontSize.h3,
    fontWeight: "bold",
    padding: padding.p3,
  },
  infoText: {
    lineHeight: 50,
    fontWeight: "300",
  },
  textLink: {
    marginTop: margin.m5,
    marginHorizontal: margin.m5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
