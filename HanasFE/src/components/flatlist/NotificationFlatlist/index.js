import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import moment from "moment";

import { SocketContext } from "../../../context/socketContext";
import {
  getNotifications,
  changeNotificationStatus,
} from "../../../redux/actions/notificationActions";
import { colors, loadingStyle } from "@constants";
import NoDataImage from "@components/NoDataImage";
import Loading from "@components/Loading";
import styles from "./style";
import style from "./style";
import usePaginate from "@hooks/usePaginate";

const Item = ({ item, onPress, backgroundColor, textColorW }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <View style={styles.viewContainerFlex}>
        <Text style={item.isOpened ? style.openedTitle : styles.title}>
          {item.description}
        </Text>

        <Text style={styles.time_elapsed}>{moment(item.createdAt).fromNow()}</Text>
      </View>

      <View style={styles.viewButtonContainerFlex}>
        <TouchableOpacity>
          <Text style={styles.boldText}>View {item.type}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={!item.isOpened ? styles.new_notif : ""} />
        </TouchableOpacity>
      </View>
      <Text style={styles.dateText}>
        {moment(item.createdAt).format("LL")} | {moment(item.createdAt).format("LT")}
      </Text>
    </View>
  </TouchableOpacity>
);

const NotificationFlatlist = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const { socket } = useContext(SocketContext);
  const { user } = useSelector((state) => state.userDetails);
  const { notifications, fetching } = useSelector((state) => state.notifications);
  const [paginatedData, handleOnEndReach, renderFooter] = usePaginate(notifications);

  useEffect(() => {
    dispatch(getNotifications());

    socket.current.on("newNotification", ({ data, push_token }) => {
      if (data.notifiedUser === user.id) {
        dispatch(getNotifications());
      }
    });
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item._id === selectedId ? colors.borderGrey : colors.background;
    const color = item._id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          if (!item.isOpened) {
            dispatch(changeNotificationStatus(item._id));
          }

          navigation.navigate(item.route);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  if (fetching)
    return (
      <View style={loadingStyle.position}>
        <Loading title="Fetching Notifications..." />
      </View>
    );

  return (
    <>
      {notifications?.length > 0 ? (
        <FlatList
          data={paginatedData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          extraData={selectedId}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          onEndReached={handleOnEndReach}
          onEndReachedThreshold={0}
          ListFooterComponent={renderFooter()}
        />
      ) : (
        <NoDataImage
          refresh={true}
          onPress={() => {
            dispatch(getNotifications());
          }}
        />
      )}
    </>
  );
};

export default NotificationFlatlist;
