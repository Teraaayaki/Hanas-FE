import { View } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";
import Header from "@components/Header";
import TransactionFlatlist from "@components/flatlist/TransactionFlatlist";
import { getItem } from "@helpers/asyncStorage";
import useIsWorker from "@hooks/useIsWorker";

const Transactions = ({ navigation }) => {
  const [prevPage, setPrevPage, handleBackButton] = useIsWorker();

  return (
    <View style={styles.container}>
      <Header
        title="Transaction History"
        showButton={true}
        onPress={handleBackButton}
      />
      <TransactionFlatlist navigation={navigation} />
    </View>
  );
};

export default Transactions;
