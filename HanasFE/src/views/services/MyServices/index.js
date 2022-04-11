import React from "react";
import { View } from "react-native";
import styles from "./style";

import MyServicesFlatlist from "@components/flatlist/myServicesFlatlists/MyServicesFlatlist";
import SampleWorksFlatlist from "@components/flatlist/myServicesFlatlists/SampleWorksFlatlist";

//Containers are invisible
//Cards are visible

const MyServices = ({ navigation }) => {
  const DATA = [
    {
      id: "100",
      name: "Electrical",
      ratePerHour: 200,
      sampleWorksList: [
        { id: "0", image: require("@images/mullet.jpg") },
        { id: "1", image: require("@images/maps.jpg") },
        { id: "2", image: require("@images/mullet.jpg") },
        { id: "3", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "4", image: require("@images/mullet.jpg") },
        { id: "5", image: require("@images/maps.jpg") },
        { id: "6", image: require("@images/mullet.jpg") },
        { id: "7", image: require("@images/maps.jpg") },
        { id: "8", image: require("@images/mullet.jpg") },
      ],
      description: "Ayo Bike everyday",
    },
    {
      id: "200",
      name: "Massage",
      ratePerHour: 500.0,
      sampleWorksList: [
        { id: "9", image: require("@images/mullet.jpg") },
        { id: "10", image: require("@images/maps.jpg") },
        { id: "11", image: require("@images/mullet.jpg") },
        { id: "12", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "13", image: require("@images/mullet.jpg") },
        { id: "14", image: require("@images/maps.jpg") },
        { id: "15", image: require("@images/mullet.jpg") },
        { id: "16", image: require("@images/maps.jpg") },
        { id: "17", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break!",
    },
    {
      id: "300",
      name: "Plumbing",
      ratePerHour: 300.0,
      sampleWorksList: [
        { id: "18", image: require("@images/mullet.jpg") },
        { id: "19", image: require("@images/maps.jpg") },
        { id: "20", image: require("@images/mullet.jpg") },
        { id: "21", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { id: "22", image: require("@images/mullet.jpg") },
        { id: "23", image: require("@images/maps.jpg") },
        { id: "24", image: require("@images/mullet.jpg") },
        { id: "25", image: require("@images/maps.jpg") },
        { id: "26", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo  whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break! Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure thisfits or this will break! ",
    },
  ];

  const DATA2 = [
    { id: "0" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];
  return (
    <View style={[styles.temp5, styles.flex1]}>
      {/* <MyServicesFlatlist navigation={navigation} DATA={DATA} /> */}
      <SampleWorksFlatlist
        DATA={DATA[0].sampleWorksList}
        onPressImage={() => {}}
      />
    </View>
  );
};

export default MyServices;
