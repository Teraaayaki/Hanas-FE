import React, { useEffect, useState } from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import CardContainer from "@components/CardContainer";
import TypeOfService from "@components/TypeOfService";
import { getServicesNearYou } from "@redux/actions/servicesNearYouActions";

const ServicesNearYou = ({ navigation, route }) => {
  const { servicesData } = useSelector((state) => state.servicesNearYou);

  const dispatch = useDispatch();

  const { service_type } = route.params;

  useEffect(() => {
    const Data = {
      service_type: service_type,
    };

    dispatch(getServicesNearYou(Data));
  }, []);

  useEffect(() => {
    const Data = {
      service_type: service_type,
    };

    dispatch(getServicesNearYou(Data));
  }, [service_type]);

  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <TouchableOpacity style={styles.location}>
            <Text onPress={() => navigation.navigate("SetLocation")}>
              {" "}
              <Image
                source={require("@images/marker.png")}
                style={styles.pin}
              />{" "}
              Tungkil, Minglanilla, Cebu
            </Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>SERVICES NEAR YOU</Text>
        </View>
        <View style={styles.textContainer}>
          <TypeOfService title={`${service_type} Services`} />
        </View>
        {servicesData.length == 0 ? (
          <Text style={styles.selfCenter}>
            No workers offering the service yet
          </Text>
        ) : (
          servicesData.map((workerInfo) => (
            <CardContainer
              key={workerInfo._id}
              name={workerInfo.workerDetails[0].name}
              profession={`${service_type} Services`}
              rating={
                workerInfo.feedbackData[0] === undefined
                  ? `0`
                  : workerInfo.feedbackData[0].rateAvg
              }
              jobs={
                workerInfo.feedbackData[0] === undefined
                  ? `0`
                  : workerInfo.feedbackData[0].jobs
              }
              // image={require("@images/profile1.png")}
              rate={workerInfo.hourly_rate}
              onPress={() =>
                navigation.navigate("ProfileView", {
                  worker_id: workerInfo.worker,
                  service_id: workerInfo._id,
                  serviceName: service_type,
                  jobs:
                    workerInfo.feedbackData[0] === undefined
                      ? `0`
                      : workerInfo.feedbackData[0].jobs,
                })
              }
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ServicesNearYou;
