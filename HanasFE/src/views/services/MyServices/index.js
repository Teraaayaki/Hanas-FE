import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";

import Header from "@components/Header";
import MyService from "@components/myService/MyService";
import AddServiceCard from "@components/myService/AddServiceCard";
import { getMyServices } from "@redux/actions/workerServiceActions";
//Containers are invisible
//Cards are visible

const MyServices = ({ navigation }) => {
  const dispatch = useDispatch();
  const { myServices, error, loading } = useSelector(
    (state) => state.workerServices
  );

  useEffect(() => {
    dispatch(getMyServices());
  }, []);

  useEffect(() => {
    console.log(myServices);
  }, [myServices]);

  return (
    <ScrollView style={styles.body}>
      <Header title="Services" />
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID="1"
          name="Electrical"
          ratePerHour={200}
          description="Ayo Bike everyday"
        />
      </View>
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID="2"
          name="Massage"
          ratePerHour={500.0}
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
          name="Plumbing"
          ratePerHour={300.0}
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
