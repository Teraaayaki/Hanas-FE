import React from "react";
import { Text, View } from "react-native";

import Certificates from "../Certificates";
import InfoCard from "../InfoCard";
import SampleWorks from "../SampleWorks";
import styles from "../styles";

//Containers are invisible
//Cards are visible

const MyService = ({
  navigation,
  ID,
  name,
  serviceType,
  ratePerHour,
  description,
}) => {
  return (
    <View style={(styles.serviceContainer, styles.mb5)}>
      {/* Header --- START*/}
      <Text style={[styles.p, styles.grey, styles.bold]}>Service {ID}</Text>
      <Text style={[styles.h1, styles.black, styles.bold, styles.mb1]}>
        {name} Service
      </Text>
      {/* Header --- END */}
      <InfoCard
        navigation={navigation}
        serviceType={serviceType}
        ratePerHour={ratePerHour}
        description={description}
      />
      <SampleWorks />
      <Certificates />
    </View>
  );
};

export default MyService;
