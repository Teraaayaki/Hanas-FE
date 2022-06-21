import { StyleSheet, StatusBar } from "react-native";
import { margin, fontSize } from "@constants";

export default StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: StatusBar.currentHeight - 15,
  },
  headerText: {
    marginTop: margin.m3,
    marginBottom: margin.m2,
  },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  fixedSize: {
    width: 75,
    height: 75,
  },
  searchInput: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-10%",
    width: "100%",
  },
  searchContainer: {
    marginHorizontal: margin.m6,
    marginTop: "-8%",
    backgroundColor: "transparent",
    borderTopColor: "transparent",
  },
  searchInputContainer: {
    backgroundColor: "white",
    flexDirection: "row-reverse",
    paddingHorizontal: 8,
  },
  inputStyle: {
    fontSize: fontSize.textInput,
    textAlign: "left",
    marginLeft: "-2%",
  },
  rightIconStyle: {
    marginLeft: "-5%",
  },
});
