import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';
import Header from '@components/Header';
import MessagesFlatlist from '@components/flatlist/MessagesFlatlist';

const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Messages" />
      <MessagesFlatlist navigation={navigation} />
    </View>
  );
};

export default Messages;
