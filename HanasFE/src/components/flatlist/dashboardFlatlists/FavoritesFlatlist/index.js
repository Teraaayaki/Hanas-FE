import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import CardContainer from "@components/CardContainer";
import styles from "./style";
import { getFavorites } from "@redux/actions/favoritesActions";
import { useDispatch } from "react-redux";

const Item = ({
  item,
  onPress,
  onPressServices,
  backgroundColor,
  textColor,
  notif,
}) => (
  <CardContainer
    name={item.clientNameData[0].name}
    profession={item.serviceNameData[0].service_type}
    rating={item.feedbackData[0].rateAvg}
    jobs={item.feedbackData[0].jobs}
    image={item.image}
    rate={item.hourly_rate}
    onPress={onPress}
    onPressServices={onPressServices}
  />
);

const FavoritesFlatlist = ({ navigation, data}) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const _onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getFavorites());
    setIsRefreshing(false);
  };

  // useEffect(() => {
  //  console.log("New Data Fetched");
  // }, [isRefreshing]);
  
  const renderItem = ({ item }) => {
    
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";
    
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("ProfileView" , {worker_id: item._id, service_id: item.myServicesData[0]._id, serviceName: item.myServicesData[0].serviceNameData[0].service_type})}
        onPressServices={() => navigation.navigate("ServicesNearYou")}
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
      onRefresh={_onRefresh}
      refreshing={isRefreshing}
    />
  );
};

export default FavoritesFlatlist;
