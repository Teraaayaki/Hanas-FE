import React, { useState, useEffect, useContext } from "react";
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
import { SocketContext } from "../../../context/socketContext";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import { getBooking } from "@redux/actions/clientBookingActions";
import services from "@helpers/services";
import LocationBar from "@components/LocationBar";
import LocationModal from "@components/LocationModal";
import NoWorkerGraphic from "@components/NoWorkerGraphic";
import { getPermissions, sendNotification } from "@helpers/notifications";
import { getImagePermissions } from "@utils/imageUtils";
import { getNotifications } from "@redux/actions/notificationActions";

const ClientDashboard = ({ navigation }) => {
  // SWR
  const [queryParams, setQueryParams] = useState(null);
  const { data, error } = useSWR([
    `api/client/get-top-rated-workers`,
    queryParams,
  ]);
  const { data: servicesData, error: topServicesError } = useSWR(
    `api/client/get-top-services`
  );
  // LOCATION STATE
  const { socket } = useContext(SocketContext);
  const { address, setAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  //holder for the state of all the compared fetched top services to its corresponding images
  const [topRatedServices, setTopRatedServices] = useState([]);

  useEffect(() => {
    setQueryParams(address);
    console.log("Booking Data Populated");
    dispatch(getBooking());
    dispatch(getNotifications());

    //map the fetched data
    let topRatedTemp = servicesData.top_rated_services.map(
      (serviceData) => serviceData.service_type
    );

    //filter the fetched data's service type with its corresponding image
    let filteredServices = services.filter((service) =>
      topRatedTemp.includes(service.service_type)
    );

    //set the new data
    setTopRatedServices([...filteredServices]);

    getPermissions();
    getImagePermissions();

    socket.current.on("newNotification", ({ data, push_token }) => {
      sendNotification(push_token, data.type, data.description);
    });
  }, []);

  useEffect(() => {
    setQueryParams(address);
  }, [address]);

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
                      <Text style={styles.pinkText} numberOfLines={1}>
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
            {data.user.length === 0 ? (
              <NoWorkerGraphic text="Sorry, No workers available in the area yet" />
            ) : (
              <>
                <CardContainerFlatlist
                  navigation={navigation}
                  data={data.user}
                />
              </>
            )}
          </View>
        }
      ></FlatList>
    </View>
  );
};

export default ClientDashboard;
