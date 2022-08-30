import React, { useEffect, useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import useSWR, { useSWRConfig } from "swr";
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
} from "@redux/actions/workerDashboardActions";
import { getServiceType } from "@redux/actions/workerServiceActions";
import { SocketContext } from "../../../context/socketContext";
import { getPermissions, sendNotification } from "@helpers/notifications";
import { getImagePermissions } from "@utils/imageUtils";
import { getNotifications } from "@redux/actions/notificationActions";
import { getUserConversations } from "@redux/actions/conversationAction";
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
  const { mutate } = useSWRConfig();
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
    dispatch(getNotifications());
    dispatch(getServiceType());

    getPermissions();
    getImagePermissions();

    socket.current.on("bookingUpdate", (data) => {
      if (user.id === data.worker) {
        dispatch(getUpcomingServices());
        mutate("api/worker/get-conv-fee");
      }
    });

    socket.current.on("newNotification", ({ data, push_token }) => {
      if (data.notifiedUser === user.id) {
        sendNotification(push_token, data.type, data.description);
      }
    });

    socket.current.on("conversationUpdate", () => {
      dispatch(getUserConversations());
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

  // console.log(convFeeData);

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
