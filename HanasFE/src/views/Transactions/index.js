import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import TransactionFlatlist from "@components/TransactionFlatlist";

const Transactions = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header title="Transaction History" />
        <TransactionFlatlist navigation={navigation}/>
    </View>
  );
};

export default Transactions;
