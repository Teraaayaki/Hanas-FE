import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView} from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import style from "../../components/LightHeaderWithHanas/style";

const Services = () => {
  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>SERVICES</Text>
        </View>
      
        <View style={styles.servicesContainer}>
          <CircularImage imageSource={require("@images/service1.png")} />
          <CircularImage imageSource={require("@images/service2.png")} />
          <CircularImage imageSource={require("@images/service3.png")} />
          <CircularImage imageSource={require("@images/service4.png")} />
          <CircularImage imageSource={require("@images/service5.png")} />
          <CircularImage imageSource={require("@images/service6.png")} />
          <CircularImage imageSource={require("@images/service7.png")} />
          <CircularImage imageSource={require("@images/service8.png")} />
          <CircularImage imageSource={require("@images/service9.png")} />
          <CircularImage imageSource={require("@images/service10.png")} />
          <CircularImage imageSource={require("@images/service11.png")} />
          <CircularImage imageSource={require("@images/service12.png")} />
          <CircularImage imageSource={require("@images/service13.png")} />
          <CircularImage imageSource={require("@images/service14.png")} />
          <CircularImage imageSource={require("@images/service15.png")} />
          <CircularImage imageSource={require("@images/service16.png")} />
          <CircularImage imageSource={require("@images/service17.png")} />
          <CircularImage imageSource={require("@images/service18.png")} />
          <CircularImage imageSource={require("@images/service19.png")} />
          <CircularImage imageSource={require("@images/service20.png")} />
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Services;
