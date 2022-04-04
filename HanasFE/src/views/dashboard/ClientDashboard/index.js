import React, { useState } from "react";
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

import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainerFlatlist from "@components/flatlist/dashboardFlatlists/CardContainerFlatlist";
import { colors } from "@constants";

const ClientDashboard = ({ navigation }) => {
  var [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: colors.lightGrey, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

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

export default ClientDashboard;
