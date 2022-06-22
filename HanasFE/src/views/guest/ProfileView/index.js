import React, { useState, useEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Icon } from "react-native-elements";
import useSWR from "swr";

import styles from "./style";
import CircularProfileImage from "@components/CircularProfileImage";
import ButtonHallowGray from "@components/ButtonHallowGray";
import SampleWorks from "@components/SampleWorks";
import Certificates from "@components/Certificates";
import WorkerProfileReviewFlatlist from "@components/flatlist/WorkerProfileReviewFlatlist";
import { colors, fontSize, margin, padding } from "@constants";
import ButtonWhite from "@components/ButtonWhite";

const GuestProfileView = ({ navigation, route }) => {
  const { worker_id, service_id, serviceName, jobs } = route.params;

  const { data: profileData } = useSWR([
    `${process.env.LOCALHOST}/api/guest/get-worker-details`,
    `${worker_id}/${service_id}`,
  ]);

  return (
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
                    imageSource={profileData.worker_details[0].profile_pic}
                  />
                  <View style={styles.flexedContainer}>
                    <View style={styles.nameContainer}>
                      <Text style={styles.name}>
                        {`${profileData.worker_details[0].first_name} ${profileData.worker_details[0].family_name}`}{" "}
                        {profileData.worker_details[0].is_verified ? (
                          <Icon
                            color="green"
                            size={fontSize.h3}
                            name="verified"
                          />
                        ) : (
                          <Icon
                            color="red"
                            size={fontSize.h3}
                            name="verified"
                          />
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
                          navigation.navigate("RegisterClientWorker")
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
                >{`${profileData.worker_details[0].first_name} ${profileData.worker_details[0].last_name}`}</Text>
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
                    {profileData.worker_details[0].myServicesData[0]
                      .feedbacksData[0] == null
                      ? `0`
                      : profileData.worker_details[0].myServicesData[0]
                          .feedbacksData[0].rate}
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
                    {
                      profileData.worker_details[0].myServicesData[0]
                        .hourly_rate
                    }{" "}
                    Php/hr
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: margin.m5, padding: padding.p3 }}>
                <View>
                  <Text style={{ fontSize: fontSize.h1 }}>Description</Text>
                  <Text
                    style={{
                      marginVertical: margin.m3,
                      textAlign: "justify",
                    }}
                  >
                    {
                      profileData.worker_details[0].myServicesData[0]
                        .description
                    }
                  </Text>
                  <View style={styles.hr}></View>
                </View>
                <View style={styles.flexedEvenly}>
                  <ButtonWhite
                    iconName="assignment-ind"
                    title="Register now to book this worker"
                    onPress={() => navigation.navigate("RegisterClientWorker")}
                  />
                </View>
                <View style={styles.mtMargin}>
                  {profileData.worker_details[0].myServicesData[0].sample_works
                    .length > 0 ? (
                    <Text style={[styles.labelText]}>
                      Sample Works (
                      {
                        profileData.worker_details[0].myServicesData[0]
                          .sample_works.length
                      }
                      )
                    </Text>
                  ) : (
                    <View>
                      <Text style={styles.labelText}>Sample Works</Text>
                      <View style={styles.centerView}>
                        <Text style={styles.mtMargin}>
                          No sample works added
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
                <SampleWorks
                  DATA={
                    profileData.worker_details[0].myServicesData[0].sample_works
                  }
                />
                <View style={{ marginTop: margin.m5 }}>
                  {profileData.worker_details[0].myServicesData[0].certificates
                    .length > 0 ? (
                    <Text style={[styles.labelText]}>
                      Certificates (
                      {
                        profileData.worker_details[0].myServicesData[0]
                          .certificates.length
                      }
                      )
                    </Text>
                  ) : (
                    <View>
                      <Text style={styles.labelText}>Certificates</Text>
                      <View style={styles.centerView}>
                        <Text style={styles.mtMargin}>
                          No certficates added
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
                <Certificates
                  DATA={
                    profileData.worker_details[0].myServicesData[0].certificates
                  }
                />
                {/* <View style={styles.flexedBetween}> */}
                {profileData.worker_details[0].myServicesData[0].feedbacksData
                  .length > 0 ? (
                  <Text style={[styles.labelText]}>
                    Feedback (
                    {
                      profileData.worker_details[0].myServicesData[0]
                        .feedbacksData.length
                    }
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
            data={profileData.worker_details[0].myServicesData[0].feedbacksData}
            serviceName={serviceName}
          />
        }
      />
    </>
  );
};

export default GuestProfileView;
