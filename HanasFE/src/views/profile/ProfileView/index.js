import React, { useState, useEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import { SocketContext } from "../../../context/socketContext";
import CircularProfileImage from "@components/CircularProfileImage";
import ButtonHallowGray from "@components/ButtonHallowGray";
import SampleWorks from "@components/SampleWorks";
import Certificates from "@components/Certificates";
import Loading from "@components/Loading";
import WorkerProfileReviewFlatlist from "@components/flatlist/WorkerProfileReviewFlatlist";
import { colors, fontSize, margin, padding } from "@constants";
import { fetchData } from "@redux/actions/clientWorkerViewActions";
import { addToFavorites, resetAddedError } from "@redux/actions/favoritesActions";
import { getMessages } from "@redux/actions/conversationAction";
import { ToastComponent, showToast } from "@helpers/toast";

const ProfileView = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { socket } = useContext(SocketContext);
  const { worker_id, service_id, serviceName, jobs } = route.params;
  const { loading, profileData, success } = useSelector(
    (state) => state.clientWorkerView,
  );
  const { user } = useSelector((state) => state.userDetails);
  const { addedSuccess, addedError } = useSelector((state) => state.addFavorites);

  const [messages, setMessages] = useState([]);
  const [fetchMessages, setFetchMessages] = useState(false);

  const errorToast = (mess) => {
    showToast("error", mess, "Please try again", () => dispatch(resetAddedError()));
  };

  const successToast = (mess) => {
    showToast("success", mess, "Successful", () => dispatch(resetAddedError()));
  };

  const handleAddToFavorites = () => {
    const Data = {
      client_id: user.id,
      favorite_services: profileData.myServicesData[0]._id,
    };

    dispatch(addToFavorites(Data));
  };

  useEffect(() => {
    if (addedError) {
      errorToast("Worker already added");
    }
  }, [addedError]);

  useEffect(() => {
    if (addedSuccess) {
      successToast("Worker added to favorites");
    }
  }, [addedSuccess]);

  useEffect(() => {
    dispatch(fetchData(worker_id, service_id));
  }, [worker_id, service_id]);

  useEffect(() => {
    if (profileData._id) {
      getMessages(profileData._id).then((data) => {
        setMessages(data);
        setFetchMessages(false);
      });
    }
  }, [fetchMessages, profileData]);

  useEffect(() => {
    socket.current.on("conversationUpdate", () => {
      setFetchMessages(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Loading title="Fetching Worker Data" />
        </View>
      ) : (
        success && (
          <>
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
                        <CircularProfileImage
                          style={styles.image}
                          imageSource={profileData.profile_pic}
                        />
                        <View style={styles.flexedContainer}>
                          <View style={styles.nameContainer}>
                            <Text style={styles.name}>
                              {`${profileData.first_name} ${profileData.family_name}`}{" "}
                              {profileData.is_verified ? (
                                <Icon
                                  color="green"
                                  size={fontSize.h3}
                                  name="verified"
                                />
                              ) : (
                                <Icon color="red" size={fontSize.h3} name="verified" />
                              )}
                            </Text>
                            <View style={styles.servicesContainer}>
                              <ButtonHallowGray
                                title={serviceName}
                                onPress={() =>
                                  navigation.navigate("ServicesNearYou", {
                                    service_type: serviceName,
                                  })
                                }
                              />
                            </View>
                          </View>

                          <View>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate("Chatroom", {
                                  receiverID: profileData._id,
                                  receiverName: `${profileData.first_name} ${profileData.middle_name} ${profileData.family_name}`,
                                  receiverProfile: "",
                                  messages,
                                })
                              }
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
                        <Text style={styles.fadedText}>Jobs Done</Text>
                        <Text style={styles.fadedText}>Rate</Text>
                      </View>
                      <View style={styles.snippetDetails}>
                        <Text style={[styles.blackText, { paddingLeft: 30 }]}>
                          <Icon color="#FFD706" size={15} name="star" />
                          {profileData.myServicesData[0].feedbacksData[0] == null
                            ? `0`
                            : profileData.myServicesData[0].feedbacksData[0].rate}
                          /5
                        </Text>
                        <Text
                          style={[
                            styles.blackText,
                            { marginLeft: 30, paddingLeft: 30 },
                          ]}
                        >
                          {jobs === undefined ? `0` : jobs}
                        </Text>
                        <Text
                          style={[
                            styles.blackText,
                            { marginLeft: 20, paddingLeft: 30 },
                          ]}
                        >
                          {profileData.myServicesData[0].hourly_rate} Php/hr
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginTop: margin.m5, padding: padding.p3 }}>
                      <View>
                        <Text style={styles.boldText}>Location</Text>
                        <Text
                          style={{
                            marginVertical: margin.m3,
                            textAlign: "justify",
                          }}
                        >
                          {profileData.address}
                        </Text>
                      </View>
                      <View style={styles.mtMargin}>
                        <Text style={styles.boldText}>Description</Text>
                        <Text
                          style={{
                            marginVertical: margin.m3,
                            textAlign: "justify",
                          }}
                        >
                          {profileData.myServicesData[0].description}
                        </Text>
                        <View style={styles.hr}></View>
                      </View>
                      <View style={styles.flexedEvenly}>
                        <TouchableOpacity
                          style={styles.whiteButton}
                          onPress={handleAddToFavorites}
                        >
                          <Text style={styles.buttonText}>ADD TO FAVORITES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.pinkButton}
                          onPress={() =>
                            navigation.navigate("BookSkilledWorker", {
                              serviceName,
                            })
                          }
                        >
                          <Text style={styles.buttonText}>BOOK</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.mtMargin}>
                        {profileData.myServicesData[0].sample_works.length > 0 ? (
                          <Text style={[styles.labelText]}>
                            Sample Works (
                            {profileData.myServicesData[0].sample_works.length})
                          </Text>
                        ) : (
                          <View>
                            <Text style={styles.labelText}>Sample Works</Text>
                            <View style={styles.centerView}>
                              <Text style={styles.mtMargin}>No sample works added</Text>
                            </View>
                          </View>
                        )}
                      </View>
                      <SampleWorks DATA={profileData.myServicesData[0].sample_works} />
                      <View style={{ marginTop: margin.m5 }}>
                        {profileData.myServicesData[0].certificates.length > 0 ? (
                          <Text style={[styles.labelText]}>
                            Certificates (
                            {profileData.myServicesData[0].certificates.length})
                          </Text>
                        ) : (
                          <View>
                            <Text style={styles.labelText}>Certificates</Text>
                            <View style={styles.centerView}>
                              <Text style={styles.mtMargin}>No certficates added</Text>
                            </View>
                          </View>
                        )}
                      </View>
                      <Certificates DATA={profileData.myServicesData[0].certificates} />
                      {/* <View style={styles.flexedBetween}> */}
                      {profileData.myServicesData[0].feedbacksData.length > 0 ? (
                        <Text style={[styles.labelText]}>
                          Feedback ({profileData.myServicesData[0].feedbacksData.length}
                          )
                        </Text>
                      ) : (
                        <View>
                          <Text style={styles.labelText}>Feedback</Text>
                          <View style={styles.centerView}>
                            <Text style={[styles.mtMargin, { marginBottom: 25 }]}>
                              No feedbacks received
                            </Text>
                          </View>
                        </View>
                      )}
                      {/* </View> */}
                    </View>
                  </View>
                </ParallaxScrollView>
              }
              ListFooterComponentStyle={{ marginTop: "-35%" }}
              ListFooterComponent={
                <WorkerProfileReviewFlatlist
                  navigation={navigation}
                  data={profileData.myServicesData[0].feedbacksData}
                  serviceName={serviceName}
                />
              }
            />
          </>
        )
      )}
      <ToastComponent />
    </>
  );
};

export default ProfileView;
