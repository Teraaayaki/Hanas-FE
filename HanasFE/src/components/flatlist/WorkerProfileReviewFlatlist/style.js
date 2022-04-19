import { StyleSheet, StatusBar } from "react-native";
import { colors, fontSize, fontWeight, margin, padding } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: padding.p3,
    paddingVertical: padding.p3,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: padding.p3,
    marginHorizontal: margin.m3,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
  },
  name: {
    color: colors.black,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h3,
    width: "100%",
  },
  viewButtonContainerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: margin.m3,
  },
  reviewText: {
    width: "75%",
    color: colors.black,
    fontSize: fontSize.p,
    textAlign: "justify",
  },
  viewText: {
    color: colors.black,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h5,
    marginTop: margin.m2,
  },
  dateText: {
    color: colors.muted50,
    fontSize: fontSize.h5,
  },
  hallowContainer: {
    flexDirection: "row",
    marginTop: "1%",
  },
  serviceName: {
    fontWeight: "900",
  },
});
