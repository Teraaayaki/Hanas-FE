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

export default (fetchedClaimedData) => [
  {
    ...AchievementsDATA[0],
    claimed: !fetchedClaimedData?.first_item_claimed
      ? false
      : fetchedClaimedData.first_item_claimed,
  },
  {
    ...AchievementsDATA[1],
    claimed: !fetchedClaimedData?.second_item_claimed
      ? false
      : fetchedClaimedData.second_item_claimed,
  },
  {
    ...AchievementsDATA[2],
    claimed: !fetchedClaimedData?.third_item_claimed
      ? false
      : fetchedClaimedData.third_item_claimed,
  },
  {
    ...AchievementsDATA[3],
    claimed: !fetchedClaimedData?.fourth_item_claimed
      ? false
      : fetchedClaimedData.fourth_item_claimed,
  },
  {
    ...AchievementsDATA[4],
    claimed: !fetchedClaimedData?.fifth_item_claimed
      ? false
      : fetchedClaimedData.fifth_item_claimed,
  },
  {
    ...AchievementsDATA[5],
    claimed: !fetchedClaimedData?.sixth_item_claimed
      ? false
      : fetchedClaimedData.sixth_item_claimed,
  },
];
