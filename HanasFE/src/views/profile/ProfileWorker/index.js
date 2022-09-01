import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Divider } from "react-native-elements";

import Alert from "@helpers/alert";
import ButtonWhite from "@components/ButtonWhite";
import styles from "./style";
import CircularProfileImage from "@components/CircularProfileImage";
import ProfileDetails from "@components/ProfileDetails";
import GetVerified from "@components/GetVerified";
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
      () => navigation.navigate("SetLocation", { nextPage: "Profile" }),
      "Hold on!",
      "You are about to change your address. Continue?",
      "Cancel",
      "YES",
      () => null
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
        <>
          {/* <View style={styles.statusBar} /> */}
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
                  <Text style={styles.verified}>
                    <Icon color="orange" size={fontSize.h3} name="verified" />{" "}
                    Pending Verification
                  </Text>
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
        </>
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
        {!user.is_verified && !user.pending_verification && (
          <GetVerified navigation={navigation} />
        )}

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
              title="View Services"
              iconName="shopping-cart"
              onPress={() => navigation.navigate("MyServices")}
            />
          </View>
          <View style={styles.singleButtonContainer}>
            <ButtonWhite
              title="Reviews"
              iconName="description"
              onPress={() => navigation.navigate("Reviews")}
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
          <Divider orientation="horizontal" />
        </View>

        <View style={styles.singleButtonContainer}>
          <ButtonWhite title="Logout" iconName="home" onPress={handleSubmit} />
        </View>
      </View>
    </ParallaxScrollView>
  );
};
export default Profile;
