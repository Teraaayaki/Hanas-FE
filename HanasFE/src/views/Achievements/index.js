import React, { useEffect, useState } from "react";
import { View } from "react-native";
import useSWR from "swr";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import AchievementsFlatlist from "@components/flatlist/AchievementsFlatlist";
import styles from "./style";
import AchievementsDATA from "@helpers/achievements";
import getTotalEarnings from "@utils/getTotalEarnings";

const Achievements = ({ navigation }) => {
  const { transactions } = useSelector((state) => state.transactions);
  const [totalEarned, setTotalEarned] = useState(0);
  const [paymentOverdue, setPaymentOverdue] = useState(false);
  const [achievementsDATA, setAchievementsData] = useState(AchievementsDATA());

  const { data: fetchedClaimedData } = useSWR(`api/worker/get-achievements`);
  const { data: fetchedConvFeeData } = useSWR(`api/worker/get-conv-fee`);

  const claimedData = () => {
    const filteredAchievementsData = AchievementsDATA(fetchedClaimedData);
    setAchievementsData([...filteredAchievementsData]);
  };

  const checkPaymentOverdue = () => {
    fetchedConvFeeData?.convFeeData?.status === "OVERDUE" &&
      setPaymentOverdue(true);
  };

  useEffect(() => {
    const finishedTransacs = getTotalEarnings(transactions);
    setTotalEarned(finishedTransacs);
  }, [transactions]);

  useEffect(() => {
    claimedData();
  }, [fetchedClaimedData]);

  useEffect(() => {
    checkPaymentOverdue();
  }, [fetchedConvFeeData]);

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
