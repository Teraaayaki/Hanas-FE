import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView, Modal, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { AddressContext } from "../../context/addressContext";
import LightHeader from "@components/LightHeaderWithHanas";
import styles from "./style";
import { colors } from "@constants";
import CardContainer from "@components/CardContainer";
import TypeOfService from "@components/TypeOfService";
import LocationBar from "@components/LocationBar";
import LocationModal from "@components/LocationModal";
import { getServicesNearYou } from "@redux/actions/servicesNearYouActions";
import NoWorkerGraphic from "@components/NoWorkerGraphic";

const ServicesNearYou = ({ navigation, route }) => {
  const { servicesData, loading } = useSelector(
    (state) => state.servicesNearYou
  );
  const dispatch = useDispatch();
  const { service_type } = route.params;
  const { address, setAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const Data = {
      service_type,
      address,
    };
    dispatch(getServicesNearYou(Data));
  }, []);

  useEffect(() => {
    const Data = {
      service_type,
      address,
    };
    dispatch(getServicesNearYou(Data));
  }, [service_type, address]);

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
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <>
            {servicesData.length == 0 ? (
              <NoWorkerGraphic
                model="steff"
                text="More workers coming soon in your area..."
              />
            ) : (
              servicesData.map((workerInfo) => (
                <CardContainer
                  key={workerInfo._id}
                  name={workerInfo.workerDetails[0].name}
                  profession={`${service_type} Services`}
                  rating={
                    workerInfo.feedbacksAveragedData?.rating === undefined
                      ? 0
                      : workerInfo.feedbacksAveragedData.rating
                  }
                  jobs={
                    workerInfo.bookingsAveragedData?.jobs === undefined
                      ? 0
                      : workerInfo.bookingsAveragedData.jobs
                  }
                  image={workerInfo.workerDetails[0].profile_pic}
                  rate={workerInfo.hourly_rate}
                  address={workerInfo.workerDetails[0].address}
                  onPress={() =>
                    navigation.navigate("ProfileView", {
                      worker_id: workerInfo.worker,
                      service_id: workerInfo._id,
                      serviceName: service_type,
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
