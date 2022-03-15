import * as React from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainer from "@components/CardContainer";

const Dashboard = ({ navigation }) => {
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
          <Text
            style={styles.fadeText}
            onPress={() => navigation.navigate("BrowseServices")}
          >
            View more
          </Text>
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
