import { StyleSheet, StatusBar } from "react-native";
import {colors, fontSize, fontWeight, margin} from "@constants";

export default StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      borderBottomColor: colors.black,
      borderBottomWidth: .5,
    },
    name: {
      color: colors.info, 
      fontWeight: fontWeight.bold, 
      fontSize: fontSize.h2,
    },
    viewButtonContainerFlex: {
      flex: 1, 
      flexDirection: "row", 
      justifyContent: "space-between", 
      marginVertical: margin.m3
    },
    boldText: {
      color: colors.black,
      fontWeight: fontWeight.bold,
    },
    viewText: {
      color: colors.info2,
      fontWeight: fontWeight.bold,
    }
  });
