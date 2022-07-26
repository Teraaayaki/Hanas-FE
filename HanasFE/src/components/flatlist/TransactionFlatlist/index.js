import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./style";
import { colors } from "@constants";
import { getTransactions } from "@redux/actions/transactionActions";

const Item = ({ item, onPress, isWorker }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.container}>
      <Text style={styles.name}>
        {isWorker
          ? `Payment Received for ${item.service_availed.service.service_type} Service`
          : `Payment Sent to ${item.worker?.first_name} ${item.worker?.family_name} ${item.worker?.suffix}`}
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
  const [transactionList, setTransactionList] = useState([...transactions]);

  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOnEndReach = () => {
    console.log("End Reached");
    if (limit === transactions.length) return;

    setLoading(true);
    setTimeout(() => {
      paginateItems(transactions);
      setLoading(false);
    }, 2000);
  };

  const paginateItems = (item) => {
    console.log("Paginate");
    let slicedArray = [];
    if (limit + 10 > item.length) {
      slicedArray = item.slice(limit);
      setLimit(item.length);
    } else {
      slicedArray = item.slice(limit, limit + 10);
      setLimit(limit + 10);
    }
    setTransactionList([...transactionList, ...slicedArray]);
  };

  const limitArray = (item) => {
    setLimit(10);
    return item.slice(0, 10);
  };

  const renderFooter = () => {
    if (loading)
      return <ActivityIndicator size="large" color={colors.secondary} />;

    return limit !== transactions.length ? (
      <View></View>
    ) : (
      <View>
        <Text>End of Page</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item._id);
          navigation.navigate("TransactionReport", { item });
        }}
        isWorker={isWorker}
      />
    );
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    const limitedArray = limitArray(transactions);
    setTransactionList([...limitedArray]);
  }, [transactions]);

  useEffect(() => {
    transactionList.map((transaction) =>
      console.log(transaction.booked_dateTimeEnd)
    );
  }, [transactionList]);

  useEffect(() => {
    console.log("LIMIT:", limit);
  }, [limit]);

  return (
    <FlatList
      data={transactionList}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      extraData={selectedId}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      ListFooterComponent={renderFooter}
      onEndReached={handleOnEndReach}
      onEndReachedThreshold={0}
    />
  );
};

export default TransactionFlatlist;
