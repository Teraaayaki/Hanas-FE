import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { colors, fontSize } from "@constants";
import styles from "./style";

import Header from "@components/Header";
import MyService from "@components/myService/MyService";
import AddServiceCard from "@components/myService/AddServiceCard";

//Containers are invisible
//Cards are visible

const MyServices = ({ navigation }) => {
  return (
    <ScrollView style={styles.body}>
      <Header title="Services" />
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID="1"
          name="Ayo Bike"
          serviceType="Electrical Service"
          ratePerHour="200.00"
          description="Ayo Bike everyday"
        />
      </View>
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID="2"
          name="Hilot"
          serviceType="Massage Service"
          ratePerHour="200.00"
          description="Service Type is a very very long lorem ipsum text that is
          completely not going to fit. This also does not have any typo
          whatsoever. This is not going to fit at all isn't it??? Make sure this
          fits or this will break!"
        />
      </View>
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID="3"
          name="Septik Repair"
          serviceType="Plumbing Service"
          ratePerHour="200.00"
          description="Service Type is a very very long lorem ipsum text that is
          completely not going to fit. This also does not have any typo
          whatsoever. This is not going to fit at all isn't it??? Make sure this
          fits or this will break!
          Service Type is a very very long lorem ipsum text that is
          completely not going to fit. This also does not have any typo
          whatsoever. This is not going to fit at all isn't it??? Make sure this
          fits or this will break!
          "
        />
      </View>
      <AddServiceCard navigation={navigation} ID="4" />
    </ScrollView>
  );
};

export default MyServices;
