import { StyleSheet } from "react-native";
import { margin, colors, padding, fontSize, fontWeight } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    height: "auto",
    width: "auto",
    marginHorizontal: margin.m3,
    marginTop: margin.m2,
    marginBottom: margin.m3,
    // borderColor: colors.borderGrey,
    // borderWidth: 1.5,
    borderRadius: 15,
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingVertical: padding.p3,
    backgroundColor: colors.white,
    elevation: 1,
  },
  profileContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gapMargin: {
    marginVertical: 5,
  },
  fadeText: {
    flex: 1,
    fontSize: fontSize.h5,
    color: colors.borderGrey,
    fontFamily: "Regular",
  },
  fadeTextValues: {
    flex: 1,
    fontSize: fontSize.h5,
    fontFamily: "Bold",
    color: colors.black,
  },
  name: {
    fontSize: fontSize.h4,
    fontFamily: "Bold",
  },
  address: {
    fontSize: fontSize.h5,
    fontFamily: "Regular",
    maxWidth: 250,
  },
  profession: {
    fontSize: fontSize.h5,
    color: colors.secondary,
    fontFamily: "Regular",
  },
  btnPress: {
    borderRadius: 10,
    padding: 10,
    textDecorationLine: "underline",
    backgroundColor: "red",
  },
  btnNormal: {
    textDecorationLine: "none",
  },
});
