import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import styles from "./style";
import CircularImage from "@components/CircularImage";
import ButtonHallowGray from "@components/ButtonHallowGray";
import SampleWorks from "@components/SampleWorks";
import ReviewsFlatlist from "@components/flatlist/ReviewsFlatlist";
import { colors, fontSize, margin, padding, fontWeight } from "@constants";
import { userLogout } from "@redux/actions/authActions";

const ProfileView = ({ navigation }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.userLogin);
  const { user } = useSelector((state) => state.userDetails);
  var [isPress, setIsPress] = useState(false);

  const handleSubmit = () => {
    console.log("logging out");
    dispatch(userLogout());
  };

  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: colors.lightGrey, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  const renderItem = () => {};

  return (
    <FlatList
      ListHeaderComponent={
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
                <Text style={styles.text}>Profile</Text>
              </View>
              <View style={styles.headContainer}>
                <CircularImage
                  style={styles.image}
                  imageSource={require("@images/profile6.png")}
                />
                <View style={styles.flexedContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                      {`${user.first_name} ${user.middle_name} ${user.last_name}`}{" "}
                      <Icon color="green" size={fontSize.h3} name="verified" />
                    </Text>
                    <View style={styles.servicesContainer}>
                      <ButtonHallowGray
                        title={"Plumbing"}
                        onPress={() => navigation.navigate("ServicesNearYou")}
                      />
                      <ButtonHallowGray
                        title={"Electrical"}
                        onPress={() => navigation.navigate("ServicesNearYou")}
                      />
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Messages")}
                    >
                      <View style={styles.messageButton}>
                        <Icon
                          color={colors.secondary}
                          size={35}
                          name="mail-outline"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
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
            <View>
              <View style={styles.snippetDetails}>
                <Text style={styles.fadedText}>Rating</Text>
                <Text style={styles.fadedText}>Jobs</Text>
                <Text style={styles.fadedText}>Rate</Text>
              </View>
              <View style={styles.snippetDetails}>
                <Text style={[styles.blackText, { marginLeft: 15 }]}>
                  <Icon color="#FFD706" size={15} name="star" />
                  4.5/5
                </Text>
                <Text style={[styles.blackText, { marginLeft: 20 }]}>1000</Text>
                <Text style={styles.blackText}>100Php/hr</Text>
              </View>
            </View>
            <View style={{ marginTop: margin.m5, padding: padding.p3 }}>
              <View>
                <Text style={{ fontSize: fontSize.h1 }}>Description</Text>
                <Text
                  style={{ marginVertical: margin.m3, textAlign: "justify" }}
                >
                  My name is Dustin, I’m a young designer from Dublin. I
                  practice for 4 years now, worked with small and big companies.
                  I have catered 100 clients in my career.
                </Text>
                <View style={styles.hr}></View>
              </View>
              <View style={styles.flexedEvenly}>
                <TouchableOpacity style={styles.whiteButton}>
                  <Text style={styles.buttonText}>ADD TO FAVORITES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.pinkButton}
                  onPress={() => navigation.navigate("BookSkilledWorker")}
                >
                  <Text style={styles.buttonText}>BOOK</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: margin.m5 }}>
                <Text style={styles.labelText}>Sample Works (10)</Text>
              </View>
              <SampleWorks />
              <View style={styles.flexedBetween}>
                <Text style={styles.labelText}>Feedback (64)</Text>
                <TouchableHighlight
                  {...touchProps}
                  onPress={() => navigation.navigate("Reviews")}
                >
                  <Text style={styles.fadeText}>View more</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ParallaxScrollView>
      }
      ListFooterComponentStyle={{ marginTop: "-35%" }}
      ListFooterComponent={<ReviewsFlatlist navigation={navigation} />}
    ></FlatList>
  );
};
export default ProfileView;
