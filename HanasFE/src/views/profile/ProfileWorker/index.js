import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@helpers/alert";
import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import styles from "./style";
import CircularProfileImage from "@components/CircularProfileImage";
import { colors, fontSize } from "@constants";
import { userLogout } from "@redux/actions/authActions";
import { changeAddress } from "@redux/actions/userDetailActions";

const Profile = ({ navigation }) => {
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
      () => navigation.navigate("SetLocation", { nextPage: "Profile" })
    );
  };

  const handleSubmit = () => {
    console.log("logging out");
    dispatch(userLogout());
  };

  useEffect(() => {
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
              imageSource={user.profile_pic}
              onPress={() => navigation.navigate("EditAccount")}
            />
            <View style={styles.nameContainer}>
              <Text
                style={styles.name}
              >{`${user.first_name} ${user.middle_name} ${user.last_name}`}</Text>
              {user.is_verified ? (
                <Text style={styles.verified}>
                  <Icon color="green" size={fontSize.h3} name="verified" />{" "}
                  Verified
                </Text>
              ) : user.pending_verification ? (
                <TouchableOpacity
                // onPress={() => navigation.navigate("GetVerified")}
                >
                  <Text style={styles.verified}>
                    <Icon color="orange" size={fontSize.h3} name="verified" />{" "}
                    Pending Verification
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("GetVerified")}
                >
                  <Text style={styles.verified}>
                    <Icon color="red" size={fontSize.h3} name="verified" />{" "}
                    Unverified
                  </Text>
                </TouchableOpacity>
              )}
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

          {user.is_verified ? (
            <Icon
              color="green"
              size={fontSize.h3}
              name="verified"
              style={styles.iconAdjusted}
            />
          ) : user.pending_verification ? (
            <Icon
              color="orange"
              size={fontSize.h3}
              name="verified"
              style={styles.iconAdjusted}
            />
          ) : (
            <Icon
              color="red"
              size={fontSize.h3}
              name="verified"
              style={styles.iconAdjusted}
            />
          )}
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
              <Text
                style={[styles.valuesHyperlink, styles.controlledWidth]}
              >{`${user.address}`}</Text>
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
