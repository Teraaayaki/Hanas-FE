import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";

import { SocketContext } from "../../../context/socketContext";
import Header from "@components/Header";
import { colors, fontSize } from "@constants";
import styles from "./styles";
import {
  getUserConversations,
  storeNewMessage,
} from "@redux/actions/conversationAction";

// Params:
// receiverID
// receiverName
// receiverProfile
// messages

const Chatroom = ({ navigation, route }) => {
  const { socket } = useContext(SocketContext);
  const { user } = useSelector((state) => state.userDetails);
  const senderName = `${user.first_name} ${user.middle_name} ${user.last_name}`;

  const [messages, setMessages] = useState(route.params.messages);

  useEffect(() => {
    socket.current.emit("connectToChatroom", user.id);

    return () => {
      socket.current.emit("disconnectToChatroom", user.id);
    };
  }, []);

  useEffect(() => {
    socket.current.on("message", (newMessage) => {
      if (newMessage[0].user._id === route.params.receiverID) {
        setMessages(GiftedChat.append(messages, newMessage));
      }
    });

    return () => {
      socket.current.off("message");
    };
  });

  // helper method that sends a message
  function handleSend(newMessage = []) {
    socket.current.emit("message", newMessage, route.params.receiverID);
    setMessages(GiftedChat.append(messages, newMessage));
    storeNewMessage(route.params.receiverID, newMessage[0]);
  }

  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: colors.lightGrey,
          },
          right: {
            // Here is the color change
            backgroundColor: colors.secondary,
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
            fontSize: fontSize.h3,
          },
          left: {
            fontSize: fontSize.h3,
          },
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View
          style={[styles.sendingContainer, styles.h100, styles.px3, styles.pr5]}
        >
          <Text
            style={[
              styles.sendButton,
              styles.py1,
              styles.px5,
              styles.rounded100,
            ]}
          >
            SEND
          </Text>
        </View>
      </Send>
    );
  }

  return (
    <View style={styles.body}>
      <Header title={route.params.receiverName} />
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{
          _id: user.id,
          name: senderName,
        }}
        renderBubble={renderBubble}
        showUserAvatar
        // onPressAvatar={() => navigation.navigate('ProfileView')}
        alwaysShowSend
        renderSend={renderSend}
        isTyping={true}
      />
    </View>
  );
};

export default Chatroom;
