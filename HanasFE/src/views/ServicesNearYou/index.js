import React, { useEffect } from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { View, Text, ScrollView, Image, TouchableOpacity, LogBox} from "react-native";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainer from "@components/CardContainer";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/DropdownPicker";


const ServicesNearYou = ({ navigation }) => {
  
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <TouchableOpacity style={styles.location}>
            <Text onPress={() => navigation.navigate("BrowseServices")}> <Image source={require("@images/marker.png")} style={styles.pin}/> Tungkil, Minglanilla, Cebu</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>SERVICES NEAR YOU</Text>
        </View>
        <View style={styles.textContainer}>
          <TypeOfService title={"Electrical Services"} />
          <DropdownPicker />
        </View>
        
        <CardContainer
          name={"Hosea Barriga"}
          profession={"Electrical Services"}
          rating={"4.5"}
          jobs={"1000"}
          image={require("@images/profile1.png")}
          rate={"100"}
          onPressServices={() => navigation.navigate("ServicesNearYou")}
          onPress={() => navigation.navigate("Profile")}
        />
        <CardContainer
          name={"Hosea Barriga"}
          profession={"Electrical Services"}
          rating={"4.5"}
          jobs={"1000"}
          image={require("@images/profile1.png")}
          rate={"100"}
          onPressServices={() => navigation.navigate("ServicesNearYou")}
          onPress={() => navigation.navigate("Profile")}
        />
        <CardContainer
          name={"Hosea Barriga"}
          profession={"Electrical Services"}
          rating={"4.5"}
          jobs={"1000"}
          image={require("@images/profile1.png")}
          rate={"100"}
          onPressServices={() => navigation.navigate("ServicesNearYou")}
          onPress={() => navigation.navigate("Profile")}
        />
        <CardContainer
          name={"Hosea Barriga"}
          profession={"Electrical Services"}
          rating={"4.5"}
          jobs={"1000"}
          image={require("@images/profile1.png")}
          rate={"100"}
          onPressServices={() => navigation.navigate("ServicesNearYou")}
          onPress={() => navigation.navigate("Profile")}
        />
      </ScrollView>
    </View>
  );
};

export default ServicesNearYou;
