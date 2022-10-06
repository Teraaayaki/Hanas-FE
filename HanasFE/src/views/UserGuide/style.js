import { colors, margin, fontSize, padding } from "@constants";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 45,
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  header: {
    marginTop: margin.m3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: padding.p4,
  },
  headerText: {
    marginHorizontal: margin.m1,
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 22,
    height: 95,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 280,
    height: 510,
    borderRadius: 10,
    resizeMode: "contain",
  },
  navIndicators: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 10,
    height: 10,
    marginHorizontal: 10,
  },
  currentIndicator: {
    backgroundColor: colors.secondary,
    borderRadius: 100,
    width: 10,
    height: 10,
    marginHorizontal: 10,
  },
  navigations: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  navBtn: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mutedBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.muted25,
  },
  getStartedBtn: {
    marginVertical: 30,
  },
});

export default styles;
