import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import useSWR from "swr";

import { AddressContext } from "../../context/addressContext";
import LightHeader from "@components/LightHeaderWithHanas";
import LocationBar from "@components/LocationBar";
import LocationModal from "@components/LocationModal";
import SearchFlatlist from "@components/flatlist/SearchFlatlist";
import styles from "./style";
import NoWorkerGraphic from "@components/NoWorkerGraphic";

const Search = ({ navigation }) => {
  const { address, setAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);

  const [queryParams, setQueryParams] = useState(null);
  const { data } = useSWR([
    `api/client/get-workers`,
    `${queryParams}/${address}`,
  ]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <LightHeader setQueryParams={setQueryParams} />
      <LocationBar location={address} onPress={toggleOverlay} />
      <LocationModal
        visible={visible}
        onBackdropPress={toggleOverlay}
        setAddress={setAddress}
      />
      <View style={styles.textContainer}>
        <Text style={styles.labelText}>
          Search Results ({data.workers.length}){" "}
        </Text>
      </View>
      {data.workers.length > 0 ? (
        <SearchFlatlist navigation={navigation} data={data.workers} />
      ) : (
        <NoWorkerGraphic
          model="steve2"
          text="No workers found. Keep searching."
        />
      )}
    </View>
  );
};

export default Search;
