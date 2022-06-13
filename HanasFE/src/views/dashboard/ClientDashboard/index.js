import React, { useState, useEffect, useContext } from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import useSWR from "swr";
import { useDispatch } from "react-redux";

import { AddressContext } from "../../../context/addressContext";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import { getBooking } from "@redux/actions/clientBookingActions";
import { fetcher } from "@helpers/fetcher";
import services from "@helpers/services";
import LocationBar from "@components/LocationBar";
import LocationModal from "@components/LocationModal";

const ClientDashboard = ({ navigation }) => {
  const { data, error } = useSWR(
    `${process.env.LOCALHOST}/api/client/get-top-rated-workers`,
    fetcher
  );
  const { data: servicesData, error: topServicesError } = useSWR(
    `${process.env.LOCALHOST}/api/client/get-top-services`,
    fetcher
  );
  // LOCATION STATE
  const { address, setAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  //holder for the state of all the compared fetched top services to its corresponding images
  const [topRatedServices, setTopRatedServices] = useState([]);

  useEffect(() => {
    console.log("Booking Data Populated");
    dispatch(getBooking());

    //map the fetched data
    let topRatedTemp = servicesData.top_rated_services.map(
      (serviceData) => serviceData.service_type
    );

    //filter the fetched data's service type with its corresponding image
    let filteredServices = services.filter((service) =>
      topRatedTemp.includes(service.service_type)
    );

    //set the new
    setTopRatedServices([...filteredServices]);
  }, []);

  return (
    <View style={styles.container}>
      <LightHeader />
      <LocationBar location={address} onPress={toggleOverlay} />
      <LocationModal
        visible={visible}
        onBackdropPress={toggleOverlay}
        setAddress={setAddress}
      />
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("BrowseServices")}
                >
                  <Text style={styles.fadeText}>View more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.horizontalScrollContainer}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.horizontalContainer}>
                  {topRatedServices.map((topRatedServiceInfo) => (
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      key={topRatedServiceInfo._id}
                    >
                      <CircularImage
                        imageSource={topRatedServiceInfo.image}
                        onPress={() =>
                          navigation.navigate("ServicesNearYou", {
                            service_type: topRatedServiceInfo.service_type,
                          })
                        }
                      />
                      <Text style={styles.pinkText}>
                        {topRatedServiceInfo.service_type}
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
