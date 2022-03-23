import { StyleSheet, StatusBar } from "react-native";
import { colors, fontSize, fontWeight, margin } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
  },
  name: {
    color: colors.info,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h3,
  },
  viewButtonContainerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: margin.m3,
  },
  boldText: {
    color: colors.black,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.p,
  },
  viewText: {
    color: colors.info2,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h5,
  },
  dateText: {
    color: colors.muted50,
    fontSize: fontSize.h5,
  },
});
