import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";

import Alert from "@helpers/alert";
import ButtonWhite from "@components/ButtonWhite";
import CircularProfileImage from "@components/CircularProfileImage";
import ProfileDetails from "@components/ProfileDetails";
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
          <ProfileDetails
            editLocation={editLocation}
            address={user.address}
            email={user.email}
            mobile_no={user.mobile_no}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.singleButtonContainer}>
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
          </View>

          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Edit Account"
              iconName="account-circle"
              onPress={() => navigation.navigate("EditAccount")}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Edit Password"
              iconName="vpn-key"
              onPress={() => navigation.navigate("EditPassword")}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Requests"
              iconName="description"
              onPress={() => navigation.navigate("ClientBookingRequests")}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Transactions"
              iconName="credit-card"
              onPress={() => navigation.navigate("TransactionHistory")}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Send Report"
              iconName="flag"
              onPress={() => navigation.navigate("Reports")}
            />
          </View>
        </View>

        <View style={styles.logout}></View>
        <View style={styles.singleButtonContainer}>
          <View style={styles.hr}></View>
        </View>

        <View style={styles.singleButtonContainer}>
          <ButtonWhite title="Logout" iconName="home" onPress={handleSubmit} />
        </View>
      </View>
    </ParallaxScrollView>
  );
};
export default ProfileClient;
