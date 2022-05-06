import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import FavoritesFlatlist from "@components/flatlist/dashboardFlatlists/FavoritesFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";
import { getFavorites } from "@redux/actions/favoritesActions";
import { useSelector } from "react-redux";

const Favorites = ({ navigation }) => {

  const { favoritesData } = useSelector( (state) => state.favorites);

  console.log("FAVORITES DATA", favoritesData);

  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <View style={styles.textContainer}>
        <TypeOfService title={"Electrical Services"} />
        <DropdownPicker />
      </View>
      <FavoritesFlatlist navigation={navigation}/>
    </View>
  );
};

export default Favorites;
