import React from "react";
import { View } from "react-native";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";

import Header from "@components/Header";
import MyServicesFlatlist from "@components/flatlist/myServicesFlatlists/MyServicesFlatlist";

//Containers are invisible
//Cards are visible

const MyServices = ({ navigation }) => {
  const DATA = [
    {
      id: "0",
      name: "Electrical",
      ratePerHour: 200,
      sampleWorksList: [
        { id: "0", image: require("@images/mullet.jpg") },
        { id: "1", image: require("@images/maps.jpg") },
        { id: "2", image: require("@images/mullet.jpg") },
        { id: "3", image: require("@images/maps.jpg") },
        { id: "4", image: require("@images/mullet.jpg") },
        { id: "5", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "0", image: require("@images/maps.jpg") },
        { id: "1", image: require("@images/mullet.jpg") },
        { id: "2", image: require("@images/maps.jpg") },
        { id: "3", image: require("@images/mullet.jpg") },
      ],
      description: "Ayo Bike everyday",
    },
    {
      id: "1",
      name: "Massage",
      ratePerHour: 500.0,
      sampleWorksList: [
        { id: "0", image: require("@images/mullet.jpg") },
        { id: "1", image: require("@images/maps.jpg") },
        { id: "2", image: require("@images/mullet.jpg") },
        { id: "3", image: require("@images/maps.jpg") },
        { id: "4", image: require("@images/mullet.jpg") },
        { id: "5", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "0", image: require("@images/maps.jpg") },
        { id: "1", image: require("@images/mullet.jpg") },
        { id: "2", image: require("@images/maps.jpg") },
        { id: "3", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break!",
    },
    {
      id: "2",
      name: "Plumbing",
      ratePerHour: 300.0,
      sampleWorksList: [
        { id: "0", image: require("@images/mullet.jpg") },
        { id: "1", image: require("@images/maps.jpg") },
        { id: "2", image: require("@images/mullet.jpg") },
        { id: "3", image: require("@images/maps.jpg") },
        { id: "4", image: require("@images/mullet.jpg") },
        { id: "5", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "0", image: require("@images/maps.jpg") },
        { id: "1", image: require("@images/mullet.jpg") },
        { id: "2", image: require("@images/maps.jpg") },
        { id: "3", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo  whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break! Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure thisfits or this will break! ",
    },
  ];

  return (
    <View style={[styles.flex1]}>
      <MyServicesFlatlist
        navigation={navigation}
        DATA={DATA}
        ListHeaderComponent={
          <View style={[styles.mb5]}>
            <Header title="Services" />
          </View>
        }
      />
    </View>
  );
};

export default MyServices;
