import React, { useState } from "react";
import { View, Text } from "react-native";
import { LogBox } from 'react-native';
import styles from "./styles";
import Header from "@components/Header";
import ScheduleFlatlist from "@components/flatlist/ScheduleFlatlist";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, fontSize} from "@constants";

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']); //ignore ni niya nga message

const Schedule = ({ }) => {
  let BRcount = 4;
  return (
    <ParallaxScrollView
      backgroundColor = "#FF6D8F"
      contentBackgroundColor= {colors.background}
      contentContainerStyle={{height: "100%"}}
      parallaxHeaderHeight={80}
      renderForeground={() => (
        <Header title={"Schedule"} />
      )}
    stickyHeaderHeight={70}
    renderStickyHeader={() => (
      <View style={{flexDirection: "row", justifyContent: "center", backgroundColor: "#FF6D8F", height: "100%"}}>
          <Text style={{color: colors.black, alignSelf: "center", fontSize: fontSize.h1, marginTop: 30}}>Booking Requests ({BRcount})</Text>
      </View>
      
    )}  
    >
    <View style={[styles.body]}>
      <View style={[styles.mx3, styles.flex1]}>
        <ScheduleFlatlist />
        <View style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}>
          <View style={[styles.flex1]} />
          <TouchableOpacity>
            <Text
              style={[
                styles.flex1,
                styles.textRight,
                styles.textSecondary,
                styles.h3,
                styles.bold,
                styles.underline,
                styles.bgBG,
                styles.px3,
              ]}
            >
              Booking Requests ({BRcount})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ParallaxScrollView>
    
  );
};

export default Schedule;
