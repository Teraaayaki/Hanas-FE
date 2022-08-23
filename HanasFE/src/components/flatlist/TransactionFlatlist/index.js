import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import styles from "./style";
import Loading from "@components/Loading";
import NoDataImage from "@components/NoDataImage";
import { SocketContext } from "../../../context/socketContext";
import { getTransactions } from "@redux/actions/transactionActions";
import usePaginate from "@custom-hooks/usePaginate";
import currencyFormat from "@utils/currencyFormat";
import { loadingStyle } from "@constants";

const Item = ({ item, onPress, isWorker }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.container}>
      <Text style={styles.name}>
        {isWorker
          ? `Payment Received for ${item.service_availed.service.service_type} Service`
          : `Payment Sent to ${item.worker?.first_name} ${item.worker?.family_name} ${item.worker?.suffix}`}
      </Text>
      <View style={styles.viewButtonContainerFlex}>
        <Text style={styles.boldText}>Php {currencyFormat(item.total_cost)}</Text>
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
  const { socket } = useContext(SocketContext);
  const { isWorker } = useSelector((state) => state.userLogin);
  const [selectedId, setSelectedId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const { user } = useSelector((state) => state.userDetails);
  const { transactions, loading } = useSelector((state) => state.transactions);
  const [paginatedData, handleOnEndReach, renderFooter] = usePaginate(transactions);

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

  const handleOnPress = () => {
    dispatch(getTransactions());
  };

  useEffect(() => {
    dispatch(getTransactions());

    socket.current.on("bookingUpdate", (data) => {
      if (user.id === data.worker || user.id === data.client) {
        dispatch(getTransactions());
      }
    });
  }, []);

  if (loading)
    return (
      <View style={loadingStyle.position}>
        <Loading title="Calculating Transactions" />
      </View>
    );

  return (
    <>
      {transactions.length === 0 ? (
        <NoDataImage refresh={true} onPress={handleOnPress} />
      ) : (
        <FlatList
          data={paginatedData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          extraData={selectedId}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          ListFooterComponent={renderFooter}
          onEndReached={handleOnEndReach}
          onEndReachedThreshold={0}
          refreshing={refresh}
          onRefresh={() => {
            dispatch(getTransactions()).then(() => {
              setRefresh(false);
            });
          }}
        />
      )}
    </>
  );
};

export default TransactionFlatlist;
