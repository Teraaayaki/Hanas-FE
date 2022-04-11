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
      ID: "100",
      name: "Electrical",
      ratePerHour: 200,
      sampleWorksList: [
        { ID: "0", image: require("@images/mullet.jpg") },
        { ID: "1", image: require("@images/maps.jpg") },
        { ID: "2", image: require("@images/mullet.jpg") },
        { ID: "3", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { ID: "4", image: require("@images/mullet.jpg") },
        { ID: "5", image: require("@images/maps.jpg") },
        { ID: "6", image: require("@images/mullet.jpg") },
        { ID: "7", image: require("@images/maps.jpg") },
        { ID: "8", image: require("@images/mullet.jpg") },
      ],
      description: "Ayo Bike everyday",
    },
    {
      ID: "200",
      name: "Massage",
      ratePerHour: 500.0,
      sampleWorksList: [
        { ID: "9", image: require("@images/mullet.jpg") },
        { ID: "10", image: require("@images/maps.jpg") },
        { ID: "11", image: require("@images/mullet.jpg") },
        { ID: "12", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { ID: "13", image: require("@images/mullet.jpg") },
        { ID: "14", image: require("@images/maps.jpg") },
        { ID: "15", image: require("@images/mullet.jpg") },
        { ID: "16", image: require("@images/maps.jpg") },
        { ID: "17", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break!",
    },
    {
      ID: "300",
      name: "Plumbing",
      ratePerHour: 300.0,
      sampleWorksList: [
        { ID: "18", image: require("@images/mullet.jpg") },
        { ID: "19", image: require("@images/maps.jpg") },
        { ID: "20", image: require("@images/mullet.jpg") },
        { ID: "21", image: require("@images/maps.jpg") },
      ],
      certificatesList: [
        { ID: "22", image: require("@images/mullet.jpg") },
        { ID: "23", image: require("@images/maps.jpg") },
        { ID: "24", image: require("@images/mullet.jpg") },
        { ID: "25", image: require("@images/maps.jpg") },
        { ID: "26", image: require("@images/mullet.jpg") },
      ],
      description:
        "Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo  whatsoever. This is not going to fit at all isn't it??? Make sure this fits or this will break! Service Type is a very very long lorem ipsum text that is completely not going to fit. This also does not have any typo whatsoever. This is not going to fit at all isn't it??? Make sure thisfits or this will break! ",
    },
  ];

  const DATA2 = [
    { ID: "0" },
    { ID: "1" },
    { ID: "2" },
    { ID: "3" },
    { ID: "4" },
    { ID: "5" },
  ];
  return (
    <View style={[styles.temp5, styles.flex1]}>
      {/* <MyServicesFlatlist navigation={navigation} DATA={DATA} /> */}
      <SampleWorksFlatlist DATA={DATA2} onPressImage={() => {}} />
    </View>
  );
};

export default MyServices;
