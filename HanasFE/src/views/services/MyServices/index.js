import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors, fontSize } from "@constants";
import styles from "./style";

import Header from "@components/Header";
import style from "../../../components/LightHeaderWithHanas/style";

//Containers are invisible
//Cards are visible

const MyServices = ({ navigation }) => {
  return (
    <ScrollView style={styles.body}>
      <Header title="Services" />
      <View style={styles.listContainer}>
        <View style={styles.serviceContainer}>
          {/* Header --- START*/}
          <Text style={[styles.p, styles.grey, styles.bold]}>Service 1</Text>
          <Text style={[styles.h1, styles.black, styles.bold, styles.mb1]}>
            Electrical Service
          </Text>
          {/* Header --- END */}

          {/* Info --- START*/}
          <View style={[styles.infoCard, styles.mt5]}>
            <View style={[styles.flexRowContainer, styles.f1]}>
              <View style={[styles.infoColumn, styles.f1]}></View>
              <View style={[styles.flexRowContainer, styles.f1, styles.ml5]}>
                <View style={[styles.infoColumn, styles.f2, styles.mr5]}></View>
                <View style={[styles.infoColumn, styles.f1]}></View>
              </View>
            </View>
            <View style={[styles.infoColumn, styles.mt3]}></View>
          </View>
          {/* Info --- END */}

          {/* Sample Works --- START */}
          <View style={[styles.infoContainer, styles.mt5]}>
            <View
              style={[styles.flexRowContainer, styles.alignCenter, styles.mb2]}
            >
              <Text style={[styles.p, styles.grey, styles.bold]}>
                Sample Works
              </Text>
              <TouchableOpacity
                style={[styles.flexRowContainer, styles.alignCenter, styles.p3]}
              >
                <Icon
                  name="add-circle-outline"
                  type="ionicons"
                  color={colors.secondary}
                  size={18}
                />
                <Text style={[styles.secondary, styles.p, styles.bold]}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHeight}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.scrollContent}>
                  <TouchableOpacity style={styles.sampleWorkIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.sampleWorkIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.sampleWorkIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.sampleWorkIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Sample Works --- END */}

          {/* Certificates --- START */}
          <View style={[styles.infoContainer, styles.mt5]}>
            <View
              style={[styles.flexRowContainer, styles.alignCenter, styles.mb2]}
            >
              <Text style={[styles.p, styles.grey, styles.bold]}>
                Certificates
              </Text>
              <TouchableOpacity
                style={[styles.flexRowContainer, styles.alignCenter, styles.p3]}
              >
                <Icon
                  name="add-circle-outline"
                  type="ionicons"
                  color={colors.secondary}
                  size={18}
                />
                <Text style={[styles.secondary, styles.p, styles.bold]}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHeight}>
              <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.scrollContent}>
                  <TouchableOpacity style={styles.certificateIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.certificateIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.certificateIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                  <TouchableOpacity style={styles.certificateIMGCard}>
                    <Image
                      style={styles.containedIMG}
                      source={require("@images/mullet.jpg")}
                    />
                  </TouchableOpacity>
                  <View style={{ padding: "1%" }}></View>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Certificates --- END */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyServices;
