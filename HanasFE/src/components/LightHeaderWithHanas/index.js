import { View, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./style";
import { colors } from "@constants";

const LightHeader = ({ setQueryParams }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const searchBar = useRef();
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e);
  };

  const triggerSearch = () => {
    if (search === "") {
      setQueryParams(null);
      return;
    }
    setQueryParams(search);
  };

  useEffect(() => {
    route.name === "Search" && searchBar.current.focus();
  }, []);

  // Passed value route params to enable focus on press of searchbar
  useEffect(() => {
    route.name === "Search" && searchBar.current.focus();
  }, [route.params]);

  return (
    <View>
      <LinearGradient
        style={styles.header}
        colors={[colors.lightYellow, colors.secondary]}
        start={{ x: 0, y: -1 }}
        end={{ x: 0, y: 1.2 }}
      >
        <View style={styles.headerText}>
          <Image
            source={require("@images/hanasLogoSquared.png")}
            style={styles.fixedSize}
          ></Image>
        </View>
      </LinearGradient>

      <SearchBar
        ref={searchBar}
        placeholder="Search for a service or a skilled worker..."
        lightTheme
        autoCapitalize="none"
        onChangeText={updateSearch}
        value={search}
        editable={true}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.inputStyle}
        rightIconContainerStyle={styles.rightIconStyle}
        showLoading={true}
        onPressIn={
          route.name === "Search"
            ? null
            : () => navigation.navigate("Search", { value: "Focus Search Bar" })
        }
        onSubmitEditing={triggerSearch}
      />
    </View>
  );
};

export default LightHeader;
