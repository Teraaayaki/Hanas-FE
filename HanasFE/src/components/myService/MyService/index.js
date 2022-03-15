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
  const AddEditServiceRoute = () => navigation.navigate("AddEditService");
  const FullScreenImageRoute = () => navigation.navigate("FullScreenImage");
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
        <TouchableOpacity style={styles.ml3} onPressOut={AddEditServiceRoute}>
          <View
            style={[
              styles.infoColumn,
              styles.alignCenter,
              styles.py5,
              styles.px4,
            ]}
          >
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
                size={16}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* Header --- END */}
      <InfoCard
        serviceType={serviceType}
        ratePerHour={ratePerHour}
        description={description}
      />
      <SampleWorks navigation={FullScreenImageRoute} />
      <Certificates navigation={FullScreenImageRoute} />
    </View>
  );
};

export default MyService;
