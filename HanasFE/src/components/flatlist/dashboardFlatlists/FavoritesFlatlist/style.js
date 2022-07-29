import { StyleSheet, StatusBar } from "react-native";
import { colors, fontSize, fontWeight, margin, padding } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: padding.p3,
    backgroundColor: colors.background,
    // marginTop: StatusBar.currentHeight || 0,
  },
  headerText: { fontSize: fontSize.h2, fontFamily: "Bold" },
  headerLightText: { fontSize: fontSize.h2 },
  textContainer: {
    marginHorizontal: margin.m3,
    marginTop: margin.m2,
    marginBottom: margin.m1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: padding.p1,
    backgroundColor: colors.background,
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    padding: padding.p2,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
  },
  name: {
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
  messageText: {
    color: colors.black,
    fontSize: fontSize.p,
  },
  dateText: {
    color: colors.muted50,
    fontSize: fontSize.h5,
  },
  leftAction: {
    padding: 2,
    justifyContent: "center",
    flex: 0.2,
    borderRadius: 15,
    height: 110,
    marginTop: 10,
  },
  actionText: {
    color: colors.white,
    alignSelf: "center",
  },
});
