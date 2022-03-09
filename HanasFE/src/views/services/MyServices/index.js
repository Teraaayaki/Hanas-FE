import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import TextLinkPink from "@components/TextLinkPink";
import { colors, fontSize } from "@constants";
import styles from "./style";

import Header from "@components/Header";
import style from "../../../components/LightHeaderWithHanas/style";

const MyServices = ({ navigation }) => {
  return (
    <ScrollView style={styles.body}>
      <Header title="Services" />
      <View style={styles.listContainer}>
        <View style={styles.serviceCard}>
          <Text style={[styles.p, styles.grey, styles.bold]}>Service 1</Text>
          <Text style={[styles.h1, styles.black, styles.bold]}>
            Electrical Service
          </Text>
          <View style={styles.infoCard}>
            <View style={styles.flexRowContainer}>
              <View style={[styles.infoColumn, styles.f1]}></View>
              <View style={[styles.flexRowContainer, styles.f1, styles.ml5]}>
                <View style={[styles.infoColumn, styles.f2, styles.mr5]}></View>
                <View style={[styles.infoColumn, styles.f1]}></View>
              </View>
            </View>
            <View style={[styles.infoColumn, styles.mt3]}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyServices;
