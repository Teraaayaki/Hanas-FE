import * as React from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import HorizontalCarousel from "@components/Carousel";
import CardContainer from "@components/CardContainer";

const ServicesNearYou = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LightHeader />
      <ScrollView style={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>SERVICES NEAR YOU</Text>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default ServicesNearYou;
