import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import { SocketContext } from "../../../context/socketContext";
import CircularProfileImage from "@components/CircularProfileImage";
import { getUserConversations } from "@redux/actions/conversationAction";
import styles from "./style";

const Item = ({ image, name, latestMessage, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <View style={styles.containerRow}>
      <CircularProfileImage imageSource={image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.viewButtonContainerFlex}>
          <Text style={styles.messageText}>{latestMessage}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const MessagesFlatlist = ({ navigation }) => {
  const { socket } = useContext(SocketContext);
  const { conversations } = useSelector((state) => state.userConversations);
  const { user } = useSelector((state) => state.userDetails);
  const [DATA, setDATA] = useState(null);
  const [fetchData, setFetchData] = useState(false);
  const [doneFetching, setDoneFetching] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserConversations()).then(() => {
      setDoneFetching(true);
      setFetchData(false);
    });
  }, [fetchData]);

  useEffect(() => {
    socket.current.on("conversationUpdate", () => {
      setFetchData(true);
    });
  }, []);

  useEffect(() => {
    if (doneFetching) {
      setDATA(conversations);
      setDoneFetching(false);
    }
  }, [doneFetching]);

  const getReceiverInfo = (participants) => {
    const info = participants.filter(
      (participant) => participant.user._id !== user.id,
    );

    return info[0].user;
  };

  const renderItem = ({ item }) => {
    const receiver = getReceiverInfo(item.participants);
    const receiverName = `${receiver.first_name} ${receiver.middle_name} ${receiver.family_name} ${receiver.suffix}`;
    const latestMessage = item.messages[0];
    const messages = item.messages;

    return (
      <Item
        image={receiver.profile_pic}
        name={receiverName}
        latestMessage={latestMessage.text}
        onPress={() =>
          navigation.navigate("Chatroom", {
            receiverID: receiver._id,
            receiverName: receiverName,
            receiverProfile: item.image,
            messages: messages,
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default MessagesFlatlist;
