import React, { useState, useEffect } from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import axios from "@axios";

import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import { getItem } from "@helpers/asyncStorage";
import { getBooking } from "@redux/actions/clientBookingActions";
import topServices from "@helpers/topServices";

const fetcher = async (url) => {
  let token = await getItem("token");
  let { data } = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const ClientDashboard = ({ navigation }) => {
  const { data, error } = useSWR(
    `${process.env.LOCALHOST}/api/client/get-top-rated-workers`,
    fetcher
  );
  // const { data: servicesData, error: topServicesError } = useSWR(
  //   `${process.env.LOCALHOST}/api/client/get-top-services`,
  //   fetcher
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Booking Data Populated");
    dispatch(getBooking());
  }, []);

  return (
    <View style={styles.container}>
      <LightHeader />
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <View>
            <ScrollView style={styles.scrollContainer}>
              <View>
                <Text style={styles.headerText}>CHOOSE YOUR SERVICE</Text>
              </View>
              <HorizontalCarousel />
              <View style={styles.textContainer}>
                <Text style={styles.labelText}>Top Services</Text>
                <TouchableHighlight
                  onPress={() => navigation.navigate("BrowseServices")}
                >
                  <Text style={styles.fadeText}>View more</Text>
                </TouchableHighlight>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.horizontalScrollContainer}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.horizontalContainer}>
                  {topServices.map((topServicesInfo) => (
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      key={topServicesInfo._id}
                    >
                      {console.log(typeof topServicesInfo.image)}
                      <CircularImage
                        imageSource={topServicesInfo.image}
                        onPress={() => navigation.navigate("ProfileView")}
                      />
                      <Text style={styles.pinkText}>
                        {topServicesInfo.service_type}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        }
        ListFooterComponent={
          <View style={styles.adjustedTop}>
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Top Rated Skilled Workers</Text>
            </View>
            <CardContainerFlatlist navigation={navigation} data={data.user} />
          </View>
        }
      ></FlatList>
    </View>
  );
};

export default ClientDashboard;
