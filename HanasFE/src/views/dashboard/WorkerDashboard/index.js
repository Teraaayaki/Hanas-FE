import React, { useEffect, useState, useContext } from "react";
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
import { SocketContext } from "../../../context/socketContext";
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
  const { socket } = useContext(SocketContext);
  const { user } = useSelector((state) => state.userDetails);
  const { transactions } = useSelector((state) => state.transactions);
  const { overview, upcomingServices, ongoingService } = useSelector(
    (state) => state.workerDashboard,
  );

  const [achievementsCardData, setAchievementsCardData] = useState(
    InitialAchievementsData,
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

    socket.current.on("bookingUpdate", (data) => {
      if (user.id === data.worker && data.book_status === "Accepted") {
        dispatch(getUpcomingServices());
      }
    });
  }, []);

  const claimedData = () => {
    const filteredAchievementsData = AchievementsDATA(fetchedClaimedData);
    const { goal } = filteredAchievementsData.find(
      (filteredAchievement) => filteredAchievement.claimed === false,
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
