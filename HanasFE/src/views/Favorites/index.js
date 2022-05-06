import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import FavoritesFlatlist from "@components/flatlist/dashboardFlatlists/FavoritesFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";

const Favorites = ({ navigation, route }) => {
  const { profileData } = route.params;
  console.log("PROFILE DATA", profileData);
  let profileDataArray = []; 
  profileDataArray.unshift(profileData);
  console.log("PROFILE ARRAY", profileDataArray);

  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      <View style={styles.textContainer}>
        <TypeOfService title={"Electrical Services"} />
        <DropdownPicker />
      </View>
      <FavoritesFlatlist navigation={navigation} data={profileDataArray}/>
    </View>
  );
};

export default Favorites;
