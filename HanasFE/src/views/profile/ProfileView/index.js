import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import CircularImage from "@components/CircularImage";
import ButtonHallowGray from "@components/ButtonHallowGray";
import SampleWorks from "@components/SampleWorks";
import Certificates from "@components/Certificates";
import Loading from "@components/Loading";
import WorkerProfileReviewFlatlist from "@components/flatlist/WorkerProfileReviewFlatlist";
import { colors, fontSize, margin, padding } from "@constants";
import { fetchData } from "@redux/actions/clientWorkerViewActions";

const ProfileView = ({ navigation, route }) => {
  const { worker_id, service_id, serviceName } = route.params;
  const dispatch = useDispatch();
  const { loading, profileData, success } = useSelector(
    (state) => state.clientWorkerView
  );

  useEffect(() => {
    dispatch(fetchData(worker_id, service_id));
  }, [worker_id, service_id]);

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
                        <CircularImage style={styles.image} />
                        <View style={styles.flexedContainer}>
                          <View style={styles.nameContainer}>
                            <Text style={styles.name}>
                              {`${profileData.first_name} ${profileData.family_name}`}{" "}
                              <Icon
                                color="green"
                                size={fontSize.h3}
                                name="verified"
                              />
                            </Text>
                            <View style={styles.servicesContainer}>
                              <ButtonHallowGray
                                title={serviceName}
                                onPress={() =>
                                  navigation.navigate("ServicesNearYou")
                                }
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
                          {profileData.myServicesData[0].feedbacksData[0].rate}
                          /5
                        </Text>
                        <Text style={[styles.blackText, { marginLeft: 20 }]}>
                          1000
                        </Text>
                        <Text style={styles.blackText}>
                          {profileData.myServicesData[0].hourly_rate}Php/hr
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginTop: margin.m5, padding: padding.p3 }}>
                      <View>
                        <Text style={{ fontSize: fontSize.h1 }}>
                          Description
                        </Text>
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
                          onPress={() => navigation.navigate("Favorites")}
                        >
                          <Text style={styles.buttonText}>
                            ADD TO FAVORITES
                          </Text>
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
                      <View style={{ marginTop: margin.m5 }}>
                        <Text style={styles.labelText}>
                          Sample Works (
                          {profileData.myServicesData[0].sample_works.length})
                        </Text>
                      </View>
                      <SampleWorks
                        DATA={profileData.myServicesData[0].sample_works}
                      />
                      <View style={{ marginTop: margin.m5 }}>
                        <Text style={styles.labelText}>
                          Certificates (
                          {profileData.myServicesData[0].certificates.length})
                        </Text>
                      </View>
                      <Certificates
                        DATA={profileData.myServicesData[0].certificates}
                      />
                      <View style={styles.flexedBetween}>
                        <Text style={styles.labelText}>
                          Feedback (
                          {profileData.myServicesData[0].feedbacksData.length})
                        </Text>
                      </View>
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
    </>
  );
};

export default ProfileView;
