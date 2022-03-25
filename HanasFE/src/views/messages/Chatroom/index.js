import React, { useState } from "react";
import { View, Text } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import Header from "@components/Header";
import { colors, fontSize } from "@constants";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

// Params:
// inboundName
// outboundName
// inboundAvatarImageSource
// outboundAvatarImageSource

const Chatroom = ({ route }) => {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of inbound chat message
    // if user_id == 1 the message is outbound
    // else if user_id == 2 the message is inbound
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: route.params.inboundName,
        avatar: route.params.inboundAvatarImageSource,
      },
    },
    {
      _id: 2,
      text: "Hi!",
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: route.params.outboundName,
        avatar: route.params.outboundAvatarImageSource,
      },
    },
    {
      _id: 3,
      text: "Nicen!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: route.params.inboundName,
        avatar: route.params.inboundAvatarImageSource,
      },
    },
    {
      _id: 4,
      text: "Nicen!",
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: route.params.outboundName,
        avatar: route.params.outboundAvatarImageSource,
      },
    },
    {
      _id: 5,
      text: "Haha",
      createdAt: new Date().getTime(),
      user: {
        _id: 1,
        name: route.params.outboundName,
        avatar: route.params.outboundAvatarImageSource,
      },
    },
    {
      _id: 6,
      text: "Sample Messages", //above in code
      createdAt: new Date().getTime(),
      system: true,
    },
  ]);

  // helper method that sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
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
            fontSize: fontSize.p,
          },
          left: {
            fontSize: fontSize.p,
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
      <Header title={route.params.inboundName} />
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{
          _id: 1,
          name: route.params.outboundName,
          avatar: route.params.outboundAvatarImageSource,
        }}
        renderBubble={renderBubble}
        showUserAvatar
        alwaysShowSend
        renderSend={renderSend}
        isTyping={true}
      />
    </View>
  );
};

export default Chatroom;
