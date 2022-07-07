import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";

import Header from "@components/Header";
import AchievementsFlatlist from "@components/flatlist/AchievementsFlatlist";
import styles from "./style";
import { getTransactions } from "@redux/actions/transactionActions";

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
    title: "LPG Tank",
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
const paymentOverdue = false;

const Achievements = ({ navigation }) => {
  const dispatch = useDispatch();
  const [totalEarned, setTotalEarned] = useState(0);
  const [achievementsDATA, setAchievementsData] = useState(AchievementsDATA);
  const { transactions } = useSelector((state) => state.transactions);
  const { data: fetchedClaimedData } = useSWR(
    `${process.env.LOCALHOST}/api/worker/get-achievements`
  );

  const claimedData = () => {
    const AchievementsDATA = [
      {
        id: "1",
        title: "5 kilos Rice",
        image: require("@images/rice.jpg"),
        goal: 4000,
        claimed: fetchedClaimedData.first_item_claimed,
      },
      {
        id: "2",
        title: "Php 300 Worth of Gas",
        image: require("@images/gas.jpg"),
        goal: 9000,
        claimed: fetchedClaimedData.second_item_claimed,
      },
      {
        id: "3",
        title: "Php 450 Worth of Groceries",
        image: require("@images/grocery.png"),
        goal: 14000,
        claimed: fetchedClaimedData.third_item_claimed,
      },
      {
        id: "4",
        title: "Php 600 Gcash Voucher",
        image: require("@images/gcash.png"),
        goal: 24000,
        claimed: fetchedClaimedData.fourth_item_claimed,
      },
      {
        id: "5",
        title: "LPG Tank",
        image: require("@images/lpg.jpg"),
        goal: 49000,
        claimed: fetchedClaimedData.fifth_item_claimed,
      },
      {
        id: "6",
        title: "Sixth Item",
        image: require("@images/gas.jpg"),
        goal: 99000,
        claimed: fetchedClaimedData.sixth_item_claimed,
      },
    ];

    setAchievementsData([...AchievementsDATA]);
  };

  useEffect(() => {
    if (transactions.length == 0) {
      dispatch(getTransactions());
    }
  }, []);

  useEffect(() => {
    let finishedTransacs = 0;
    transactions.map((transaction) => {
      if (transaction.book_status === "Finished") {
        finishedTransacs += transaction.total_cost;
      }
    });
    setTotalEarned(finishedTransacs);
  }, [transactions]);

  useEffect(() => {
    claimedData();
  }, [fetchedClaimedData]);

  return (
    <View style={[styles.body]}>
      <Header title={"Achievements"} />
      <View style={[styles.flex1, styles.mx3]}>
        <AchievementsFlatlist
          AchievementsDATA={achievementsDATA}
          totalEarnings={totalEarned}
          paymentOverdue={paymentOverdue}
        />
      </View>
    </View>
  );
};

export default Achievements;
