import { View, Text, ScrollView } from "react-native";
import React, {useEffect} from "react";
import styles from "./style";
import Header from "@components/Header";
import FavoritesFlatlist from "@components/flatlist/dashboardFlatlists/FavoritesFlatlist";
import TypeOfService from "@components/TypeOfService";
import DropdownPicker from "@components/modal/DropDownPickerServicesNearYou";
import { getFavorites } from "@redux/actions/favoritesActions";
import { useSelector, useDispatch } from "react-redux";

const Favorites = ({ navigation }) => {

  const { favoritesData } = useSelector( (state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    console.log("Re-render");
  }, [favoritesData]);
 
  // console.log("LENGTH OF DATA", favoritesData.length);
  console.log("favoritesData", favoritesData);
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
      {/* <View style={styles.textContainer}>
        <TypeOfService title={"Electrical Services"} />
        <DropdownPicker />
      </View> */}
      
      { (favoritesData.length == 0) ? 
        <View style={styles.centeredEmptyText}>
          <Text style={styles.emptyText}>No workers added to favorites yet.</Text> 
        </View>
        : <FavoritesFlatlist navigation={navigation} data={favoritesData}/> }
      
    </View>
  );
};

export default Favorites;
