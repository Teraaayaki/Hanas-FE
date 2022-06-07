import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import useSWR from "swr";
import axios from "@axios";

import styles from "./style";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { getItem } from "@helpers/asyncStorage";
import { fetcher } from "@helpers/fetcher";
import services from "@helpers/services";

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
        </View>
      </ScrollView>
    </View>
  );
};

export default BrowseServices;
