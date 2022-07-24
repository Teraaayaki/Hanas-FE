import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView, Modal, ActivityIndicator } from "react-native";
import useSWR from "swr";

import { AddressContext } from "../../../context/addressContext";
import LightHeader from "@components/LightHeaderWithHanas";
import styles from "./style";
import { colors } from "@constants";
import CardContainer from "@components/CardContainer";
import TypeOfService from "@components/TypeOfService";
import LocationBar from "@components/LocationBar";
import LocationModal from "@components/LocationModal";
import NoWorkerGraphic from "@components/NoWorkerGraphic";

const ServicesNearYou = ({ navigation, route }) => {
  const { service_type } = route.params;
  const { address, setAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);

  const { data } = useSWR([
    `api/guest/get-worker-with-specific-service`,
    `${service_type}/${address}`,
  ]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <LocationBar location={address} onPress={toggleOverlay} />
          <LocationModal
            visible={visible}
            onBackdropPress={toggleOverlay}
            setAddress={setAddress}
          />
          <Text style={styles.headerText}>SERVICES NEAR YOU</Text>
        </View>
        <View style={styles.textContainer}>
          <TypeOfService title={`${service_type} Services`} />
        </View>
        {!data.service_worker ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <>
            {data.service_worker.length == 0 ? (
              <NoWorkerGraphic
                model="steff"
                text="More workers coming soon in your area..."
              />
            ) : (
              data.service_worker.map((workerInfo) => (
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
