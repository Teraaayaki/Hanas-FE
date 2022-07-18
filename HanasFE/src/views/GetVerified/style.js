import { colors, margin, fontSize, padding } from "@constants";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  header: {
    marginTop: margin.m5,
    marginHorizontal: margin.m5,
    marginBottom: margin.m2,
    backgroundColor: colors.white,
    width: "75%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: padding.p5,
  },
  headerText: {
    marginHorizontal: margin.m1,
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  descriptionContainer: {
    alignItems: "center",
  },
  description: {
    justifyContent: "center",
    width: "75%",
  },
  descriptionText: {
    fontSize: fontSize.h4,
    marginVertical: 3,
  },
  tableContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  table: {
    flexDirection: "row",
    paddingTop: padding.p2,
    paddingHorizontal: padding.p2,
    width: "65%",
    flexWrap: "wrap",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  tableHeader: {
    alignSelf: "flex-start",
    marginBottom: margin.m1,
  },
  tableRow: {
    width: "50%",
  },
  text: {
    color: "grey",
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: margin.m1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginVertical: margin.m3,
    width: "75%",
  },
  fileInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: padding.p2,
  },
  regularButton: {
    backgroundColor: colors.lightGrey,
    padding: padding.p2,
    borderRadius: 5,
    height: 35,
  },
  browseText: {
    color: colors.dark,
    fontSize: fontSize.h3,
  },
  label: {
    marginBottom: margin.m1,
    color: colors.dark,
    fontSize: fontSize.h4,
    fontWeight: "bold",
  },
  textInput: {
    marginLeft: margin.m1,
  },
  textLow: {
    color: "darkgrey",
    fontSize: fontSize.p,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: margin.m3,
  },
  button: {
    width: "75%",
  },
  textLinkContainer: {
    marginTop: margin.m4,
    alignItems: "center",
  },
  textLink: {
    marginVertical: margin.m5,
    color: colors.dark,
    fontSize: fontSize.h4,
    fontWeight: "bold",
  },
  attachment: {
    padding: padding.p1,
    width: "60%",
    marginLeft: margin.m10,
  },
});

export default styles;
