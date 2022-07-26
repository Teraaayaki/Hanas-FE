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

//Achievements----------------------------------------
const InitialAchievementsData = {
  goal: 99999,
  completion: 0,
};
//Convenience Fee-------------------------------------
const ConvenienceFeeDATA = {
  remainingBalance: "499.00",
  dueDate: "07/23/22",
  address: "Brgy, Lourdes Bogo City, Cebu",
};

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

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getOverview());
    dispatch(getUpcomingServices());
    dispatch(getOngoingService());
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
          ConvenienceFeeDATA={ConvenienceFeeDATA}
        />
      </View>
    </View>
  );
};

export default WorkerDashboard;

//Ongoing---------------------------------------------
// const OngoingDATA = {
//   id: "bd7a2cbea-c1b1-46c2-aed5-3ad53abb28ba",
//   title: "Zeroth Item",
//   name: "Hosea Barriga",
//   timeStart: "10:00 AM",
//   timeEnd: "8:30 PM",
//   image: require("@images/service1.png"),
//   address: "Danao City",
// };

//Services--------------------------------------------
// const ServicesDATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//     name: "Hosea Barriga",
//     timeStart: "10:00 AM",
//     timeEnd: "8:30 PM",
//     image: require("@images/service1.png"),
//     address: "Danao City",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//     name: "Soy Lebumfacil",
//     timeStart: "11:00 AM",
//     timeEnd: "2:30 PM",
//     image: require("@images/service2.png"),
//     address: "Bogo City",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//     name: "James Karl Sia",
//     timeStart: "8:00 AM",
//     timeEnd: "1:00 PM",
//     image: require("@images/service3.png"),
//     address: "Talamban",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d78",
//     title: "Fourth Item",
//     name: "Mary Therese Sun Alegre",
//     timeStart: "7:30 AM",
//     timeEnd: "2:30 PM",
//     image: require("@images/service4.png"),
//     address: "Lapu-lapu City",
//   },
// ];
//Overview--------------------------------------------
// const OverviewDATA = [
//   {
//     //Weekly
//     income: "600.00",
//     HighestSingle: "499.75",
//   },
//   {
//     //Monthly
//     income: "333.45",
//     HighestSingle: "999.75",
//   },
//   {
//     //Yearly
//     income: "864.50",
//     HighestSingle: "1499.75",
//   },
// ];
