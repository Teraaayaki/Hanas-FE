import { Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import React, { useState } from "react";

import Button from "@components/Button";
import styles from "./style";

const UserGuide = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const userGuideData = [
    {
      image: require("@images/GetVerified.png"),
      description:
        "To start your journey, click browse to upload. Your business profile and services are hidden from Clients until your identity is verified.",
    },
    {
      image: require("@images/CreateService.png"),
      description:
        "Your business begins with your services. Build your Service profile and set your rate per hour; upload certificates and become Hanas Certified! Services are hidden from Clients by default until certified.",
    },
    {
      image: require("@images/BookingRequests.png"),
      description:
        "Meet your clients and accept their booking requests! Remember to account for travel time and plan your schedule ahead.",
    },
    {
      image: require("@images/StartFinishService.png"),
      description:
        "On the day of Service, travel to your destination and meet your Clients. Don't forget to press Start Service to begin your work. Upon completing your work, press End Service to notify Hanas and your profit will be delivered through GCash.",
    },
    {
      image: require("@images/ConvenienceFee.png"),
      description:
        "To keep Hanas services going, Hanas will claim 8% of your profits. But worry not! You can win rewards by reaching Achievement Milestones!",
    },
    {
      image: require("@images/Achievements.png"),
      description:
        "Accumulate sales to unlock milestone rewards! When a card lights green, contact Hanas and set a schedule to claim your rewards at the Hanas office.",
    },
  ];

  const nextGuide = () => {
    if (currentIndex === userGuideData.length - 1) return;

    setCurrentIndex(currentIndex + 1);
  };

  const prevGuide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>User Guide</Text>
          </View>
        </View>
        <Text style={styles.description}>
          {userGuideData[currentIndex].description}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={userGuideData[currentIndex].image}
          />
        </View>
        <View style={styles.navigations}>
          <TouchableOpacity onPress={prevGuide}>
            <Text style={currentIndex === 0 ? styles.mutedBtn : styles.navBtn}>
              Prev
            </Text>
          </TouchableOpacity>
          <View style={styles.navIndicators}>
            {userGuideData.map((_, index) => (
              <View
                key={index}
                style={
                  index === currentIndex
                    ? styles.currentIndicator
                    : styles.indicator
                }
              />
            ))}
          </View>
          <TouchableOpacity onPress={nextGuide}>
            <Text
              style={
                currentIndex === userGuideData.length - 1
                  ? styles.mutedBtn
                  : styles.navBtn
              }
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        {currentIndex === userGuideData.length - 1 ? (
          <View style={styles.getStartedBtn}>
            <Button
              title={"Get Started"}
              onPress={() => navigation.navigate("GetVerified")}
            />
          </View>
        ) : (
          <View style={{ height: 110 }} />
        )}
      </View>
    </ScrollView>
  );
};

export default UserGuide;
