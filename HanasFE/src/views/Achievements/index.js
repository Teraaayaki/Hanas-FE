import React, { useEffect, useState } from "react";
import { View } from "react-native";
import useSWR from "swr";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import AchievementsFlatlist from "@components/flatlist/AchievementsFlatlist";
import styles from "./style";
import AchievementsDATA from "@helpers/achievements";
import getTotalEarnings from "@utils/getTotalEarnings";

const totalEarnings = 16000;
const paymentOverdue = false;

const Achievements = ({ navigation }) => {
  const { transactions } = useSelector((state) => state.transactions);
  const [totalEarned, setTotalEarned] = useState(0);
  const [achievementsDATA, setAchievementsData] = useState(AchievementsDATA());
  const { data: fetchedClaimedData } = useSWR(`api/worker/get-achievements`);

  const claimedData = () => {
    const filteredAchievementsData = AchievementsDATA(fetchedClaimedData);
    setAchievementsData([...filteredAchievementsData]);
  };

  useEffect(() => {
    const finishedTransacs = getTotalEarnings(transactions);
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
