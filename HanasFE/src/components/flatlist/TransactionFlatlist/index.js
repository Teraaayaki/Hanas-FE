import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import styles from "./style";

import { getTransactions } from "@redux/actions/transactionActions";

const Item = ({ item, onPress, backgroundColor, textColor, isWorker }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <Text style={styles.name}>
        {isWorker
          ? `Payment Received for ${item.service_availed.service.service_type} Service`
          : `Payment Sent to ${item.worker.first_name} ${item.worker.family_name} ${item.worker.suffix}`}
      </Text>
      <View style={styles.viewButtonContainerFlex}>
        <Text style={styles.boldText}>Php {item.total_cost}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.viewText} onPress={onPress}>
            View
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dateText}>
        {moment(item.updatedAt).format("LL")} | {moment(item.updatedAt).format("LT")}
      </Text>
    </View>
  </TouchableOpacity>
);

const TransactionFlatlist = ({ navigation }) => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const { isWorker } = useSelector((state) => state.userLogin);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item._id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item._id);
          navigation.navigate("TransactionReport");
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        isWorker={isWorker}
      />
    );
  };

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      extraData={selectedId}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default TransactionFlatlist;
