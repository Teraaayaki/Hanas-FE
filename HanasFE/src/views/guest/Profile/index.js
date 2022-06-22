import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";

import ButtonWhite from "@components/ButtonWhite";
import CircularProfileImage from "@components/CircularProfileImage";
import { colors, fontSize } from "@constants";
import styles from "./style";

const ProfileGuest = ({ navigation }) => {
  // LOGOUT
  const handleSubmit = () => {
    navigation.navigate("Landing");
  };

  return (
    <ParallaxScrollView
      backgroundColor="#FF6D8F"
      contentBackgroundColor="#FF6D8F"
      contentContainerStyle={styles.h100}
      parallaxHeaderHeight={180}
      renderForeground={() => (
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
        >
          <View style={styles.headerText}>
            <Text style={styles.text}>Your Profile</Text>
          </View>
          <View style={styles.headContainer}>
            <CircularProfileImage style={styles.image} imageSource="none" />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Guest User</Text>
              <Text style={styles.verified}>
                <Icon color="yellowgreen" size={fontSize.h3} name="verified" />{" "}
                Basic User
              </Text>
            </View>
          </View>
        </LinearGradient>
      )}
      stickyHeaderHeight={70}
      renderStickyHeader={() => (
        <View style={styles.stickyHeaderContainer}>
          <Text style={styles.stickyName}>Guest User</Text>
          <Icon
            color="yellowgreen"
            size={fontSize.h3}
            name="verified"
            style={styles.iconAdjusted}
          ></Icon>
        </View>
      )}
    >
      <View style={styles.parallaxContentContainer}>
        <View style={styles.singleButtonContainer}>
          <ButtonWhite title="Logout" iconName="home" onPress={handleSubmit} />
        </View>
      </View>
    </ParallaxScrollView>
  );
};
export default ProfileGuest;
