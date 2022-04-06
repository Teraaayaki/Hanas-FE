import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import styles from "./style";
import CircularImage from "@components/CircularImage";
import { colors, fontSize } from "@constants";
import { userLogout } from "@redux/actions/authActions";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  const handleSubmit = () => {
    console.log("logging out");
    dispatch(userLogout());
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
            <CircularImage
              style={styles.image}
              imageSource={require("@images/mullet.jpg")}
            />
            <View style={styles.nameContainer}>
              <Text
                style={styles.name}
              >{`${user.first_name} ${user.middle_name} ${user.last_name}`}</Text>
              <Text style={styles.verified}>
                <Icon color="green" size={fontSize.h3} name="verified" />{" "}
                Verified
              </Text>
            </View>
          </View>
        </LinearGradient>
      )}
      stickyHeaderHeight={70}
      renderStickyHeader={() => (
        <View style={styles.stickyHeaderContainer}>
          <Text
            style={styles.stickyName}
          >{`${user.first_name} ${user.last_name}`}</Text>
          <Icon
            color="green"
            size={fontSize.h3}
            name="verified"
            style={styles.iconAdjusted}
          ></Icon>
        </View>
      )}
    >
      <View style={styles.parallaxContentContainer}>
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.headingText}>Account Info</Text>
          <View style={styles.hr}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.values}>{`${user.address}`}</Text>
          </View>
          <View style={styles.hrFaded}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.values}>{`${user.email}`}</Text>
          </View>
          <View style={styles.hrFaded}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={styles.values}>{`+63${user.mobile_no}`}</Text>
          </View>
          <View style={styles.profileInfoContainer}>
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
            title="View services"
            iconName="shopping-cart"
            onPress={() => navigation.navigate("MyServices")}
          />
          <View style={styles.buttonRow}>
            <View style={styles.flexedView}>
              <ButtonWhite
                title="Reviews"
                iconName="description"
                onPress={() => navigation.navigate("Reviews")}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <ButtonWhite
                title="Transactions"
                iconName="credit-card"
                onPress={() => navigation.navigate("TransactionHistory")}
              />
            </View>
          </View>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
      </View>
    </ParallaxScrollView>
  );
};
export default Profile;
