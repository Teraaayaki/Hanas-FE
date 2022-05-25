import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView } from "react-native";
import useSWR from "swr";
import axios from "@axios";

import styles from "./style";
import { colors, fontSize } from "@constants";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import style from "../../components/LightHeaderWithHanas/style";
import { getItem } from "@helpers/asyncStorage";
import services from "@helpers/services";

const fetcher = async (url) => {
  let token = await getItem("token");
  let { data } = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const BrowseServices = ({ navigation }) => {
  //local state where we are going to store all servicecs with their corresponding images
  const [allFilteredImageServices, setAllFilteredImageServices] = useState([]);

  const { data: servicesData, error: allServicesError } = useSWR(
    `${process.env.LOCALHOST}/api/client/get-all-services`,
    fetcher
  );

  useEffect(() => {
    //map the fetched data
    let allServices = servicesData.all_services.map(
      (serviceData) => serviceData.service_type
    );

    //filter the fetched data's service type with its corresponding image
    let filteredServicesWithImages = services.filter((service) =>
      allServices.includes(service.service_type)
    );

    //set the new state with all the fetched services with its corresponding images
    setAllFilteredImageServices([...filteredServicesWithImages]);
  }, []);
  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>SERVICES</Text>
        </View>

        <View style={styles.servicesContainer}>
          {allFilteredImageServices.map((servicesInfo) => (
            <View key={servicesInfo._id}>
              <CircularImage
                imageSource={servicesInfo.image}
                onPress={() =>
                  navigation.navigate("ServicesNearYou", {
                    service_type: servicesInfo.service_type,
                  })
                }
              />
              <Text style={styles.serviceText}>
                {servicesInfo.service_type}
              </Text>
            </View>
          ))}

          {/* <CircularImage imageSource={require("@images/service2.png")} />
          <CircularImage imageSource={require("@images/service3.png")} />
          <CircularImage imageSource={require("@images/service4.png")} />
          <CircularImage imageSource={require("@images/service5.png")} />
          <CircularImage imageSource={require("@images/service6.png")} />
          <CircularImage imageSource={require("@images/service7.png")} />
          <CircularImage imageSource={require("@images/service8.png")} />
          <CircularImage imageSource={require("@images/service9.png")} />
          <CircularImage imageSource={require("@images/service10.png")} />
          <CircularImage imageSource={require("@images/service11.png")} />
          <CircularImage imageSource={require("@images/service12.png")} />
          <CircularImage imageSource={require("@images/service13.png")} />
          <CircularImage imageSource={require("@images/service14.png")} />
          <CircularImage imageSource={require("@images/service15.png")} />
          <CircularImage imageSource={require("@images/service16.png")} />
          <CircularImage imageSource={require("@images/service17.png")} />
          <CircularImage imageSource={require("@images/service18.png")} />
          <CircularImage imageSource={require("@images/service19.png")} />
          <CircularImage imageSource={require("@images/service20.png")} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default BrowseServices;
