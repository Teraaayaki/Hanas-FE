import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import AchievementsFlatlist from "@components/flatlist/AchievementsFlatlist";
import styles from "./style";

const AchievementsDATA = [
  {
    id: "1",
    title: "5 kilos Rice",
    image: require("@images/rice.jpg"),
    goal: 4000,
    claimed: false,
  },
  {
    id: "2",
    title: "Php 300 Worth of Gas",
    image: require("@images/gas.jpg"),
    goal: 9000,
    claimed: false,
  },
  {
    id: "3",
    title: "Php 450 Worth of Groceries",
    image: require("@images/grocery.png"),
    goal: 14000,
    claimed: false,
  },
  {
    id: "4",
    title: "Php 600 Gcash Voucher",
    image: require("@images/gcash.png"),
    goal: 24000,
    claimed: false,
  },
  {
    id: "5",
    title: "Fifth Item",
    image: require("@images/lpg.jpg"),
    goal: 49000,
    claimed: false,
  },
  {
    id: "6",
    title: "Sixth Item",
    image: require("@images/gas.jpg"),
    goal: 99000,
    claimed: false,
  },
];
const totalEarnings = 16000;
const paymentOverdue = true;

const Achievements = ({ navigation }) => {
  const [totalEarned, setTotalEarned] = useState(0);
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    let finishedTransacs = 0;
    transactions.map((transaction) => {
      if (transaction.book_status === "Finished") {
        finishedTransacs += transaction.total_cost;
      }
    });
    setTotalEarned(finishedTransacs);
  });

  return (
    <View style={[styles.body]}>
      <Header title={"Achievements"} />
      <View style={[styles.flex1, styles.mx3]}>
        <AchievementsFlatlist
          AchievementsDATA={AchievementsDATA}
          totalEarnings={totalEarned}
          paymentOverdue={paymentOverdue}
        />
      </View>
    </View>
  );
};

export default Achievements;
