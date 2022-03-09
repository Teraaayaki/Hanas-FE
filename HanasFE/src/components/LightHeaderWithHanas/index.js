import { View, Text, Image} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from 'react-native-elements';
import styles from "./style";
import { colors, fontSize } from "@constants";


type SearchBarComponentProps = {};

const LightHeader = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
      };
  return (
    <View>
        <LinearGradient
        style={styles.header}
        colors={[colors.lightYellow, colors.secondary]}
        start={{ x: 0, y: -1 }} end={{ x: 0, y: 1.2 }}
        >
            <View style={styles.headerText}>
                <Image source={require("@images/hanasLogoSquared.png")} style={styles.fixedSize}></Image>
            </View>
        </LinearGradient>
        
            <SearchBar
                placeholder="Search for a service or a skilled worker..."
                lightTheme
                autoCapitalize='none'
                onChangeText={updateSearch}
                value={search}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
                inputStyle={styles.inputStyle}
                rightIconContainerStyle ={styles.rightIconStyle}
                showLoading = {true}
            />

    </View>
  );
};

export default LightHeader;
