import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import TransactionFlatlist from "@components/flatlist/TransactionFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerTransactionHistory";

const Transactions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Transaction History" />
      <View style={styles.textContainer}>
        {/* <TypeOfService title="" /> */}
        {/* <DropdownPicker /> */}
      </View>
      <TransactionFlatlist navigation={navigation} />
    </View>
  );
};

export default Transactions;
