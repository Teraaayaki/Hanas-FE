import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import CardContainer from "@components/CardContainer";
import styles from "./style";

const Item = ({
  item,
  onPress,
  onPressServices,
  backgroundColor,
  textColor,
  notif,
}) => (
  <CardContainer
    name={item.name}
    profession={item.myServicesData[0].serviceNameData[0].service_type}
    rating={item.myServicesData[0].feedbackData[0].rateAvg}
    jobs={item.myServicesData[0].feedbackData[0].jobs}
    image={item.profile_pic}
    rate={item.myServicesData[0].hourly_rate}
    onPress={onPress}
    onPressServices={onPressServices}
  />
);

const CardContainerFlatlist = ({ navigation, data }) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate("ProfileView", {
            worker_id: item._id,
            service_id: item.myServicesData[0]._id,
            serviceName: item.myServicesData[0].serviceNameData[0].service_type,
            jobs: item.myServicesData[0].feedbackData[0].jobs,
          })
        }
        // onPressServices={() => navigation.navigate("ServicesNearYou")}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      extraData={selectedId}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default CardContainerFlatlist;
