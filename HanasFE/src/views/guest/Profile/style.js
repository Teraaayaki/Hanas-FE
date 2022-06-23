import { StyleSheet, StatusBar } from "react-native";
import { colors, margin, padding, fontSize, fontWeight } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: padding.p20,
  },
  headerText: {
    alignItems: "center",
    marginTop: margin.m3,
    marginBottom: margin.m2,
  },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 70 / 2,
    resizeMode: "cover",
    height: 70,
    width: 70,
  },
  headContainer: {
    flexDirection: "row",
    marginLeft: margin.m6,
  },
  nameContainer: {
    marginLeft: margin.m3,
    marginTop: margin.m5,
  },
  name: {
    fontSize: fontSize.profileName,
    fontWeight: "bold",
  },
  verified: {
    color: colors.white,
    fontSize: fontSize.h3,
  },
  parallaxContentContainer: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 10,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: padding.p5,
    marginBottom: 120,
  },
  profileDetailsContainer: {
    marginTop: 50,
    marginBottom: 25,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: colors.background,
  },
  buttonRow: {
    marginTop: margin.m5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleButtonContainer: { marginVertical: 4 },
  homeButtonContainer: { marginTop: 10 },
  stickyHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF6D8F",
    height: "100%",
  },
  stickyName: {
    color: colors.black,
    alignSelf: "center",
    fontSize: fontSize.h1,
    marginTop: 30,
  },
  iconAdjusted: {
    marginTop: 42,
    marginLeft: 5,
  },
  h100: {
    height: "100%",
  },
  controlledWidth: {
    maxWidth: 180,
  },
});

export default styles;
