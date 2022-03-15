import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";

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
      <Text style={[styles.p, styles.grey, styles.bold]}>Service {ID}</Text>
      {/* Header --- START*/}
      <View style={[styles.flexRowContainer, styles.alignCenter, styles.mt2]}>
        <Text
          style={[
            styles.h1,
            styles.black,
            styles.bold,
            styles.mb1,
            styles.flexGrow,
          ]}
        >
          {name} Service
        </Text>
        <TouchableOpacity
          style={styles.ml3}
          onPressOut={() => navigation.navigate("AddEditService")}
        >
          <View style={[styles.infoColumn, styles.alignCenter]}>
            <View
              style={[
                styles.borderSecondary,
                styles.rounded,
                styles.h100,
                styles.square,
                styles.alignCenter,
                styles.justifyContentCenter,
              ]}
            >
              <Icon
                name="pen"
                type="font-awesome-5"
                color={colors.secondary}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
