import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";

import Alert from "@helpers/alert";
import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import CircularProfileImage from "@components/CircularProfileImage";
import { colors, fontSize, margin } from "@constants";
import styles from "./style";
import { userLogout } from "@redux/actions/authActions";
import { changeAddress } from "@redux/actions/userDetailActions";

const ProfileClient = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const { address } = useSelector((state) => state.userRegister);

  // ROUTE TO SET LOCATION
  const editLocation = () => {
    Alert(
      "Hold on!",
      "You are about to change your address. Continue?",
      "Cancel",
      "YES",
      () => null,
      () => navigation.navigate("SetLocation", { nextPage: "ProfileClient" })
    );
  };

  // LOGOUT
  const handleSubmit = () => {
    console.log("logging out");
    dispatch(userLogout());
  };

  useEffect(() => {
    console.log("Running");
    if (address !== "") {
      // EDIT ADDRESS
      dispatch(changeAddress(address));
    }
  }, [address]);

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
            <CircularProfileImage
              style={styles.image}
              onPress={() => navigation.navigate("EditAccount")}
              imageSource={user.profile_pic}
            />
            <View style={styles.nameContainer}>
              <Text
                style={styles.name}
              >{`${user.first_name} ${user.middle_name} ${user.last_name}`}</Text>
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
            <TouchableOpacity onPress={editLocation}>
              <Text style={styles.valuesEditable}>{`${user.address}`}</Text>
            </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Favorites")}
          >
            <Icon type="material" name="bookmark" color={colors.secondary} />
            <View style={styles.adjustedButton}>
              <Text style={styles.buttonText}>PREFERRED SKILLED WORKERS</Text>
              <Text style={{ fontSize: fontSize.h5, marginLeft: margin.m3 }}>
                Your favorites and previously booked skilled workers
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonRow}>
            <View style={styles.flexedView}>
              <ButtonWhite
                title="Requests"
                iconName="description"
                onPress={() => navigation.navigate("ClientBookingRequests")}
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
export default ProfileClient;
