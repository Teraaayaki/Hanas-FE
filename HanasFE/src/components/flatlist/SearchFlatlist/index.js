import React, { useState } from "react";
import { FlatList } from "react-native";

import { colors } from "@constants";
import CardContainer from "@components/CardContainer";

const Item = ({ item, onPress, onPressServices }) => (
  <CardContainer
    name={item.workerDetails.name}
    profession={item.serviceNameData.service_type}
    rating={item.feedbackData === undefined ? 0 : item.feedbackData.rateAvg}
    address={item.workerDetails.address}
    jobs={item.feedbackData === undefined ? 0 : item.feedbackData.jobs}
    image={item.workerDetails.profile_pic}
    rate={item.hourly_rate}
    onPress={onPress}
    onPressServices={onPressServices}
  />
);

const SearchFlatlist = ({ navigation, data }) => {
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
            worker_id: item.workerDetails._id,
            service_id: item._id,
            serviceName: item.serviceNameData.service_type,
            jobs: item.feedbackData.jobs,
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

export default SearchFlatlist;
