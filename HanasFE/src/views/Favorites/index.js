import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import Header from "@components/Header";
import FavoritesFlatlist from "@components/flatlist/dashboardFlatlists/FavoritesFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";
import { getFavorites } from "@redux/actions/favoritesActions";
import { resetRemoveError } from "@redux/actions/favoritesActions";
import { useSelector, useDispatch } from "react-redux";
import { ToastComponent, showToast } from "@helpers/toast";

const Favorites = ({ navigation }) => {
  const { favoritesData } = useSelector((state) => state.favorites);

  const { removedSuccess, removedError } = useSelector((state) => state.removeFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    console.log("removedSuccess", removedSuccess);
    if (removedSuccess) {
      showToast(
        "success",
        "Successfully removed from favorites",
        "Pull down to refresh list",
        () => dispatch(resetRemoveError())
      );
    }
    console.log("SECOND removedSuccess", removedError);
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
        <View style={styles.centeredEmptyText}>
          <Text style={styles.emptyText}>
            No workers added to favorites yet.
          </Text>
        </View>
      ) : (
        <FavoritesFlatlist navigation={navigation} data={favoritesData} />
      )}
      <ToastComponent />
    </View>
  );
};

export default Favorites;
