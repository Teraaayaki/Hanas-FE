import { StyleSheet, StatusBar } from "react-native";
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  location: {
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: colors.borderGrey,
    width: "auto",
    padding: padding.p1,
    marginBottom: margin.m3,
    borderRadius: 20,
  },
  pin: {
    width: 15,
    height: 15,
  },
  headerText: {
    fontSize: fontSize.title,
    color: colors.dark,
    fontWeight: fontWeight.bold,
    alignSelf: "center",
  },
  horizontalScrollContainer: {
    height: "auto",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: margin.m3,
    marginTop: margin.m3,
    marginBottom: margin.m2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: padding.p3,
  },
  selfCenter: {
    alignSelf: "center",
    fontSize: fontSize.h2,
    marginTop: "25%",
  },
});
