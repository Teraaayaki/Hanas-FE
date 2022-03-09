import * as React from "react";
import LightHeader from "@components/LightHeaderWithHanas";
import CircularImage from "@components/CircularImage";
import { View, Text, ScrollView } from "react-native";
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
      </ScrollView>
      
    </View>
  );
};

export default Dashboard;
