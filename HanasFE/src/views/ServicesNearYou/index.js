import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import LightHeader from "@components/LightHeaderWithHanas";
import styles from "./style";
import { colors } from "@constants";
import CardContainer from "@components/CardContainer";
import TypeOfService from "@components/TypeOfService";
import { getServicesNearYou } from "@redux/actions/servicesNearYouActions";

const ServicesNearYou = ({ navigation, route }) => {
  const { servicesData, loading } = useSelector(
    (state) => state.servicesNearYou
  );
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
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <>
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
                  image={workerInfo.workerDetails[0].profile_pic}
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
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ServicesNearYou;
