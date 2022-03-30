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
  title: {
    color: colors.black,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h3,
  },
  viewButtonContainerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: margin.m3,
  },
  viewContainerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    color: colors.blue,
    fontSize: fontSize.p,
  },
  new_notif: {
    backgroundColor: colors.info2,
    borderColor: colors.black,
    borderRadius: 12,
    width: 10,
    height: 10,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h5,
  },
  dateText: {
    color: colors.muted50,
    fontSize: fontSize.h5,
  },
  time_elapsed: {
    opacity: 0.3,
    fontSize: fontSize.h5,
    marginTop: margin.m1,
    marginLeft: "2%",
  },
});
