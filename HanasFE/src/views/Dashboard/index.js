import * as React from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>CHOOSE YOUR SERVICE</Text>
        </View>
        <HorizontalCarousel />
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollContainer}>
          <View style={styles.horizontalContainer}>
            <Image source={require("@images/service1.png")}/>
            <Image source={require("@images/service1.png")}/>
            <Image source={require("@images/service1.png")}/>
            <Image source={require("@images/service1.png")}/>
            <Image source={require("@images/service1.png")}/>
            <Image source={require("@images/service1.png")}/>
            {/* <CircularImage imageSource={require("@images/service1.png")} />
            <CircularImage imageSource={require("@images/service2.png")} />
            <CircularImage imageSource={require("@images/service3.png")} />
            <CircularImage imageSource={require("@images/service4.png")} />
            <CircularImage imageSource={require("@images/service5.png")} />
            <CircularImage imageSource={require("@images/service6.png")} />  */}
          </View>
        </ScrollView>
      </ScrollView>
      
    </View>
  );
};

export default Dashboard;
