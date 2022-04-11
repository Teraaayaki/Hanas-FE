import React from "react";
import { View } from "react-native";

import Header from "@components/Header";
import AchievementsFlatlist from "@components/flatlist/AchievementsFlatlist";
import styles from "./style";

const Achievements = ({ navigation }) => {
  const AchievementsDATA = [
    {
      id: "3",
      title: "Third Item",
      image: require("@images/mullet.jpg"),
      goal: 14000,
      claimed: false,
    },
    {
      id: "4",
      title: "Fourth Item",
      image: require("@images/mullet.jpg"),
      goal: 24000,
      claimed: false,
    },
    {
      id: "5",
      title: "Fifth Item",
      image: require("@images/mullet.jpg"),
      goal: 49000,
      claimed: false,
    },
    {
      id: "6",
      title: "Sixth Item",
      image: require("@images/mullet.jpg"),
      goal: 99000,
      claimed: false,
    },
    {
      id: "1",
      title: "First Item",
      image: require("@images/dashboard1.png"),
      goal: 4000,
      claimed: true,
    },
    {
      id: "2",
      title: "Second Item",
      image: require("@images/mullet.jpg"),
      goal: 9000,
      claimed: true,
    },
  ];
  const totalEarnings = 16000;
  const paymentOverdue = true;

  return (
    <View style={[styles.body]}>
      <Header title={"Achievements"} />
      <View style={[styles.flex1, styles.mx3]}>
        <AchievementsFlatlist
          AchievementsDATA={AchievementsDATA}
          totalEarnings={totalEarnings}
          paymentOverdue={paymentOverdue}
        />
      </View>
    </View>
  );
};

export default Achievements;
