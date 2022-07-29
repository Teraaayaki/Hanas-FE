import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Animated, Text } from "react-native";

import { colors } from "@constants";
import CardContainer from "@components/CardContainerWithRemove";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Icon } from "react-native-elements";
import styles from "./style";
import {
  getFavorites,
  resetRemoveError,
} from "@redux/actions/favoritesActions";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "@redux/actions/favoritesActions";
import usePaginate from "@hooks/usePaginate";
import Loading from "@components/Loading";
import { loadingStyle } from "@constants";

const Item = ({ item, onPress, onPressServices }) => (
  <CardContainer
    name={item.clientNameData[0].name}
    profession={item.serviceNameData[0].service_type}
    rating={
      item.feedbacksAveragedData?.rating === undefined
        ? 0
        : item.feedbacksAveragedData.rating.toFixed(2)
    }
    address={item.clientNameData[0].address}
    jobs={
      item.bookingsAveragedData?.jobs === undefined
        ? 0
        : item.bookingsAveragedData.jobs
    }
    image={item.clientNameData[0].profile_pic}
    rate={item.hourly_rate}
    item={item}
    onPress={onPress}
  />
);

const FavoritesFlatlist = ({ navigation, data }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const { error, success } = useSelector((state) => state.favorites);
  const [paginatedData, handleOnEndReach, renderFooter] = usePaginate(data);

  const [selectedId, setSelectedId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const _onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getFavorites()).then(() => {
      setIsRefreshing(false);
    });
  };

  const handleRemove = (id) => {
    const Data = {
      client_id: user.id,
      favorite_services: id,
    };

    dispatch(removeFavorites(Data));
  };

  const renderHeader = () => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.headerLightText}>
          Total Workers
          <Text style={styles.headerText}> ({data?.length})</Text>
        </Text>
      </View>
    );
  };

  const renderLeftActions = (progress, dragX, id) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity
        style={styles.leftAction}
        onPress={() => handleRemove(id)}
      >
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          <Icon color={colors.danger} size={40} name="delete" />
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Swipeable
        renderLeftActions={(progress, dragX) =>
          renderLeftActions(progress, dragX, item._id)
        }
      >
        <Item
          item={item}
          onPress={() =>
            navigation.navigate("ProfileView", {
              worker_id: item.clientNameData[0]._id,
              service_id: item._id,
              serviceName: item.serviceNameData[0].service_type,
            })
          }
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </Swipeable>
    );
  };

  if (isRefreshing)
    return (
      <View style={loadingStyle.position}>
        <Loading title="Fetching Favorites" />
      </View>
    );

  return (
    <>
      <FlatList
        data={paginatedData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={handleOnEndReach}
        onEndReachedThreshold={0}
        onRefresh={_onRefresh}
        refreshing={isRefreshing}
      />
    </>
  );
};

export default FavoritesFlatlist;
