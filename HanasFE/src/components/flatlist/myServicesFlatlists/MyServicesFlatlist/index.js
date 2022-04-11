import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import Header from "@components/Header";
import MyService from "@components/myService/MyService";
import AddServiceCard from "@components/myService/AddServiceCard";
import styles from "../style";

const MyServicesFlatlist = ({ navigation, DATA }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <MyService
          navigation={navigation}
          ID={item.ID}
          name={item.name}
          ratePerHour={item.ratePerHour}
          description={item.description}
          sampleWorksListDATA={item.sampleWorksList}
          certificatesListDATA={item.certificatesList}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={[styles.mb5]}>
          <Header title="Services" />
        </View>
      }
      ListFooterComponent={
        <AddServiceCard navigation={navigation} ID={DATA.length + 1} />
      }
    />
  );
};

export default MyServicesFlatlist;
