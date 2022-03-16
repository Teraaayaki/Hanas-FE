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
} from "react-native";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainer from "@components/CardContainer";
import { colors } from "@constants";

const Dashboard = ({ navigation }) => {
  var [isPress, setIsPress] = useState(false);

  var touchProps = {
    activeOpacity: 0.2,
    underlayColor: colors.lightGrey, // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => navigation.navigate("BrowseServices"), // <-- "onPress" is apparently required
  };
  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>CHOOSE YOUR SERVICE</Text>
        </View>
        <HorizontalCarousel />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Top Services</Text>
          <TouchableHighlight {...touchProps}>
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
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Top Rated Skilled Workers</Text>
        </View>
        <CardContainer
          name={"Hosea Barriga"}
          profession={"Electrical Services"}
          rating={"4.5"}
          jobs={"1000"}
          image={require("@images/profile1.png")}
          rate={"100"}
          onPress={() => navigation.navigate("Profile")}
        />
        <CardContainer
          name={"Renzo Lebumfacil"}
          profession={"Electrical Services"}
          rating={"4.0"}
          jobs={"699"}
          image={require("@images/profile2.png")}
          rate={"99"}
          onPress={() => navigation.navigate("Profile")}
        />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
