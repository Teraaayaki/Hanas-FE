import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import NoDataImage from "@components/NoDataImage";
import FavoritesFlatlist from "@components/flatlist/dashboardFlatlists/FavoritesFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";
import { getFavorites } from "@redux/actions/favoritesActions";
import { resetRemoveError } from "@redux/actions/favoritesActions";

import { ToastComponent, showToast } from "@helpers/toast";

const Favorites = ({ navigation }) => {
  const { favoritesData } = useSelector((state) => state.favorites);

  const { removedSuccess, removedError } = useSelector(
    (state) => state.removeFavorites
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    if (removedSuccess) {
      showToast(
        "success",
        "Successfully removed from favorites",
        "Pull down to refresh list",
        () => dispatch(resetRemoveError())
      );
    }
  }, [removedSuccess]);

  useEffect(() => {
    console.log("Re-render");
  }, [favoritesData]);

  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      {/* <View style={styles.textContainer}>
        <TypeOfService title={"Electrical Services"} />
        <DropdownPicker />
      </View> */}
      {favoritesData.length == 0 ? (
        <NoDataImage />
      ) : (
        <FavoritesFlatlist navigation={navigation} data={favoritesData} />
      )}
      <ToastComponent />
    </View>
  );
};

export default Favorites;
