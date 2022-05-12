import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Animated } from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import CardContainer from "@components/CardContainerWithRemove";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Icon } from "react-native-elements";
import styles from "./style";
import { getFavorites, resetError } from "@redux/actions/favoritesActions";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "@redux/actions/favoritesActions";
import { ToastComponent, showToast } from "@helpers/toast";

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
    item={item}
    onPress={onPress}
    onPressServices={onPressServices}
  />
);

const FavoritesFlatlist = ({ navigation, data}) => {
  const dispatch = useDispatch();
  const {user} = useSelector( (state) => state.userDetails);
  const {error, success: favoritesSuccess} = useSelector( (state) => state.favorites);

  const [selectedId, setSelectedId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const _onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getFavorites());
    setIsRefreshing(false);
  };

  const handleRemove = () => {
    const Data = {
        client_id: user.id,
        favorite_services: data._id,
    }
    dispatch(removeFavorites(Data));
    showToast("success", "Successfully removed from favorites", "Pull down to refresh list");

  }
  
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity style={styles.leftAction} onPress={handleRemove}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          <Icon
              color="#dd2c00"
              size={40}
              name="delete"
              /> 
        </Animated.Text>
      </TouchableOpacity>
    );
  };
  
  useEffect(() => {
    if(favoritesSuccess){
      dispatch(resetError());
    }
  }, [favoritesSuccess]);

  const renderItem = ({ item }) => {
    
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";
    
    return (
      <Swipeable renderLeftActions={renderLeftActions} >
        <Item
          item={item}
          onPress={() => navigation.navigate("ProfileView" , {worker_id: item.clientNameData[0]._id, service_id: item._id , serviceName: item.serviceNameData[0].service_type})}
          onPressServices={() => navigation.navigate("ServicesNearYou")}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </Swipeable>
      
    );
  };

  return (
    <>
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
      {/* <ToastComponent/> */}
    </>
    
  );
};

export default FavoritesFlatlist;
