import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import { colors, fontSize } from "@constants";
import styles from "./style";

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} stickyHeaderHiddenOnScroll={true}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
      >
        <View style={styles.headerText}>
          <Text style={styles.text}>Your Profile</Text>
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
      <View style={styles.profileDetails}>
        <View style={styles.accountInfoContainer}>
          <Text style={styles.infoHeader}>Account Info</Text>
          <View style={styles.headerBorder}></View>
          <View style={styles.accountInfo}>
            <View>
              <Text style={styles.infoName}>Address:</Text>
              <Text style={styles.infoText}>
                53 P. Rodrigo Duterte St. Bogo City, Cebu
              </Text>
            </View>
            <View>
              <Text style={styles.infoName}>Email:</Text>
              <Text style={styles.infoText}>lebumfacilrenzo@yahoo.com</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.infoName}>Mobile No:</Text>
              <Text style={styles.infoText}>0953453443</Text>
            </View>
          </View>
          <View style={styles.headerBorder}></View>
          <View style={styles.textLink}>
            <TextLinkPink
              title="Edit Account Info"
              onPress={() => navigation.navigate("EditAccount")}
            />
            <TextLinkPink
              title="Edit Password"
              onPress={() => navigation.navigate("EditPassword")}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonWhite
            title="Services"
            iconName="shopping-cart"
            onPress={() => navigation.navigate("Services")}
          />
          <View style={styles.buttonRow}>
            <ButtonWhite
              title="Reviews"
              iconName="description"
              onPress={() => navigation.navigate("Reviews")}
            />
            <ButtonWhite
              title="Transactions"
              iconName="credit-card"
              onPress={() => navigation.navigate("Transactions")}
            />
          </View>
        </View>
        <View style={styles.headerBorder}></View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
