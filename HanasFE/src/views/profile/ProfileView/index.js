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

import axios from "@axios";
import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import styles from "./style";
import CircularImage from "@components/CircularImage";
import ButtonHallowGray from "@components/ButtonHallowGray";
import SampleWorks from "@components/SampleWorks";
import Certificates from "@components/Certificates";
import WorkerProfileReviewFlatlist from "@components/flatlist/WorkerProfileReviewFlatlist";
import { colors, fontSize, margin, padding, fontWeight } from "@constants";
import { userLogout } from "@redux/actions/authActions";
import {getItem} from "@helpers/asyncStorage";


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    profile_pic: "@images/profile1.png",
    name: "James Sia",
    rate: "3",
    service: "Electrical",
    comment: "Good job on this one brodie",
    date: "09 - 26 - 21 | 08:00:12"
  },
];

const images = {
  // activeIndex: index,
  carouselItems: [
    {
      image: require("@images/dashboard1.png"),
    },
    {
      image: require("@images/dashboard1.png"),
    },
    {
      image: require("@images/dashboard1.png"),
    },
  ],
};

const ProfileView = ({ navigation, route}) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.userLogin);
  const { user } = useSelector((state) => state.userDetails);
  const { worker_id, service_id, serviceName} = route.params;
  const [isPress, setIsPress] = useState(false);
  const [profileData, setProfileData] = useState({}); 

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

  useEffect ( async () => {
    try {
      let token = await getItem("token");
      let {data} = await axios.get("api/client/get-worker-details", {worker_id, service_id}, {headers: {"Authorization": `Bearer ${token}`}});
      setProfileData(data.worker_details.user[0]);
    }catch(error){
      console.log(error);
    }
    
  }, [worker_id, service_id]);

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
                />
                <View style={styles.flexedContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                      {`${profileData.first_name} ${profileData.middle_name} ${profileData.last_name}`}{" "}
                      <Icon color="green" size={fontSize.h3} name="verified" />
                    </Text>
                    <View style={styles.servicesContainer}>
                      <ButtonHallowGray
                        title={serviceName}
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
              >{`${profileData.first_name} ${profileData.last_name}`}</Text>
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
                  {profileData.myServicesData[0].feedbacksData[0].rate}/5
                </Text>
                <Text style={[styles.blackText, { marginLeft: 20 }]}>1000</Text>
                <Text style={styles.blackText}>{profileData.myServicesData[0].hourly_rate}Php/hr</Text>
              </View>
            </View>
            <View style={{ marginTop: margin.m5, padding: padding.p3 }}>
              <View>
                <Text style={{ fontSize: fontSize.h1 }}>Description</Text>
                <Text
                  style={{ marginVertical: margin.m3, textAlign: "justify" }}
                >
                  {profileData.myServicesData[0].description}
                </Text>
                <View style={styles.hr}></View>
              </View>
              <View style={styles.flexedEvenly}>
                <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate("Favorites")}>
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
              <View style={{ marginTop: margin.m5 }}>
                <Text style={styles.labelText}>Certificates (10)</Text>
              </View>
              <Certificates />
              <View style={styles.flexedBetween}>
                <Text style={styles.labelText}>Feedback ({profileData.myServicesData[0].feedbacksData.length})</Text>
              </View>
            </View>
          </View>
        </ParallaxScrollView>
      }
      ListFooterComponentStyle={{ marginTop: "-35%" }}
      ListFooterComponent={<WorkerProfileReviewFlatlist navigation={navigation} data={profileData.myServicesData[0].feedbacksData}/>}
    />
  );
};
export default ProfileView;
