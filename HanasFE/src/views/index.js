import React, { useState } from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";

import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import Header from "@components/Header";
import SkilledWorkerDashboardFlatlist from "@components/flatlist/dashboardFlatlists/SkilledWorkerDashboardFlatlist";
import { colors } from "@constants";

const Dashboard = ({ navigation }) => {
  const [isWorker, setIsWorker] = useState(false);
  //CLIENT DASHBOARD --- START =====================================================
  var [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: colors.lightGrey, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

  const clientDashboard = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPressOut={() => setIsWorker(true)}>
          <LightHeader />
        </TouchableOpacity>
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
                    <CircularImage
                      imageSource={require("@images/service1.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                    <CircularImage
                      imageSource={require("@images/service2.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                    <CircularImage
                      imageSource={require("@images/service3.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                    <CircularImage
                      imageSource={require("@images/service4.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                    <CircularImage
                      imageSource={require("@images/service5.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                    <CircularImage
                      imageSource={require("@images/service6.png")}
                      onPress={() => navigation.navigate("ServicesNearYou")}
                    />
                  </View>
                </ScrollView>
              </ScrollView>
            </View>
          }
          ListFooterComponent={
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.labelText}>Top Rated Skilled Workers</Text>
              </View>
              <CardContainerFlatlist navigation={navigation} />
            </View>
          }
        ></FlatList>
      </View>
    );
  };
  //CLIENT DASHBOARD --- END =======================================================

  //SKILLED WORKER DASHBOARD --- START =============================================
  const workerDashboard = ({ navigation }) => {
    return (
      <View style={[styles.body]}>
        <TouchableOpacity onPressOut={() => setIsWorker(false)}>
          <Header title={"Dashboard"} />
        </TouchableOpacity>
        <View style={[styles.flex1, styles.w100, styles.px3]}>
          <SkilledWorkerDashboardFlatlist />
        </View>
      </View>
    );
  };
  //SKILLED WORKER DASHBOARD --- END ===============================================

  return isWorker
    ? workerDashboard((navigation = { navigation }))
    : clientDashboard((navigation = { navigation }));
};

export default Dashboard;
