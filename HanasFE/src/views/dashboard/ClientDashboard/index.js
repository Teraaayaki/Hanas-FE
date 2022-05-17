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

import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import { colors } from "@constants";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";
import { getBooking } from "@redux/actions/clientBookingActions";
import { fontSize } from "../../../constants";

const fetcher = async (url) => {
  let token = await getItem("token");
  let { data } = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const topServicesFetcher = async (url) => {
  let token = await getItem("token");

  let { data } = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  });

  return data;
};

const ClientDashboard = ({ navigation }) => {
  let servicesListArr = [];
  const { data, error } = useSWR(
    `${process.env.LOCALHOST}/api/client/get-top-rated-workers`,
    fetcher
  );

  const { data : servicesData , error: topServicesError } = useSWR(
      `${process.env.LOCALHOST}/api/client/get-top-services`,
      topServicesFetcher
  );

  const dispatch = useDispatch();
  
  
  // const arrayViewOfServices = (servicesData) => {
    

    // return buttonsListArr;
  // };

  var [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: colors.lightGrey, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

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
                  {...touchProps}
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
                  {/* <View style={{flexDirection: "column", justifyContent: "center"}}>
                    <CircularImage
                      imageSource={require("@images/service1.png")}
                      onPress={() => navigation.navigate("ProfileView")}
                    />
                    <Text style={styles.pinkText}>{servicesData.top_rated_services[0].service_type}</Text>
                  </View> */}
                  
                  {servicesData.top_rated_services.map(servicesInfo => (
                    
                    <View style={{flexDirection: "column", justifyContent: "center"}}>
                      {console.log(typeof servicesInfo.image)}
                      <CircularImage
                        imageSource={require(`${servicesInfo.image}`)}
                        onPress={() => navigation.navigate("ProfileView")}
                      />
                      <Text style={styles.pinkText}>{servicesInfo.service_type}</Text>
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
