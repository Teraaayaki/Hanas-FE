import { StyleSheet, StatusBar } from "react-native";
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  header: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: padding.p10,
  },
  scrollContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: fontSize.title,
    color: colors.dark,
    fontWeight: fontWeight.bold,
    alignSelf: "center",
  },
  servicesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginVertical: margin.m3,
  },
  serviceText: {
    alignSelf: "center",
    marginTop: -5,
    marginBottom: 10,
    maxWidth: 95,
    textAlign: "center",
  },
});

export default styles;
