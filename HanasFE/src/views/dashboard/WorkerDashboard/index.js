import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";

import AchievementsDATA from "@helpers/achievements";
import styles from "./style";
import Header from "@components/Header";
import SkilledWorkerDashboardFlatlist from "@components/flatlist/dashboardFlatlists/SkilledWorkerDashboardFlatlist";
import { getTransactions } from "@redux/actions/transactionActions";
import getTotalEarnings from "@utils/getTotalEarnings";
import {
  getOngoingService,
  getOverview,
  getUpcomingServices,
} from "../../../redux/actions/workerDashboardActions";
import { getPermissions } from "@helpers/notifications";
import { getImagePermissions } from "@utils/imageUtils";

//Achievements----------------------------------------
const InitialAchievementsData = {
  goal: 99999,
  completion: 0,
};
//Convenience Fee-------------------------------------
// const ConvenienceFeeDATA = {
//   remainingBalance: "499.00",
//   dueDate: "07/23/22",
//   address: "Brgy, Lourdes Bogo City, Cebu",
// };

const WorkerDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const { overview, upcomingServices, ongoingService } = useSelector(
    (state) => state.workerDashboard
  );

  const [achievementsCardData, setAchievementsCardData] = useState(
    InitialAchievementsData
  );
  const { data: fetchedClaimedData } = useSWR(`api/worker/get-achievements`);

  const { data: convFeeData } = useSWR(`api/worker/get-conv-fee`);

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getOverview());
    dispatch(getUpcomingServices());
    dispatch(getOngoingService());

    getPermissions();
    getImagePermissions();
  }, []);

  const claimedData = () => {
    const filteredAchievementsData = AchievementsDATA(fetchedClaimedData);
    const { goal } = filteredAchievementsData.find(
      (filteredAchievement) => filteredAchievement.claimed === false
    );
    const totalEarned = getTotalEarnings(transactions);
    setAchievementsCardData({ goal, completion: totalEarned });
  };

  useEffect(() => {
    claimedData();
  }, [fetchedClaimedData, transactions]);

  return (
    <View style={[styles.body]}>
      <Header title={"Dashboard"} />
      <View style={[styles.flex1, styles.w100, styles.px3]}>
        <SkilledWorkerDashboardFlatlist
          navigation={navigation}
          OngoingDATA={ongoingService}
          ServicesDATA={upcomingServices}
          OverviewDATA={overview}
          AchievementsDATA={achievementsCardData}
          ConvenienceFeeDATA={convFeeData.convFeeData}
        />
      </View>
    </View>
  );
};

export default WorkerDashboard;
