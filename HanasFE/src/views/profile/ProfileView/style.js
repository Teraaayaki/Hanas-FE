import { StyleSheet, StatusBar } from "react-native";
import { colors, margin, padding, fontSize, fontWeight } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
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
    fontSize: fontSize.h3,
    flexDirection: "row",
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
    backgroundColor: colors.white,
    marginVertical: 50,
    padding: padding.p5,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 5,
  },
  profileInfoContainer: {
    flex: 1,
    flexDirection: "row",
    padding: padding.p5,
    justifyContent: "space-between",
  },
  headingText: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.h3,
    padding: padding.p1,
  },
  label: {
    fontSize: fontSize.p,
    fontWeight: fontWeight.bold,
  },
  values: {
    fontSize: fontSize.p,
    color: colors.black,
  },
  hr: {
    borderBottomColor: colors.borderGrey,
    borderWidth: 1,
  },
  hrFaded: {
    borderBottomColor: colors.borderGrey,
    borderWidth: 1,
    opacity: 0.3,
    marginHorizontal: margin.m5,
  },
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
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGrey,
  },
  h100: {
    height: "100%",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexedContainer: {
    flex: 1,
    flexDirection: "row",
  },
  messageButton: {
    marginHorizontal: 10,
    marginVertical: 30,
    borderColor: colors.secondary,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "white",
  },
  fadedText: {
    fontSize: fontSize.h2,
    color: colors.borderGrey,
  },
  blackText: {
    fontSize: fontSize.h2,
    color: colors.black,
    fontWeight: fontWeight.bold,
  },
  snippetDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: margin.m3,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  flexedEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  whiteButton: {
    width: 140,
    height: 53,
    borderRadius: 10,
    marginTop: margin.m5,
    elevation: 2,
    backgroundColor: colors.white,
  },
  pinkButton: {
    width: 140,
    height: 53,
    borderRadius: 10,
    marginTop: margin.m5,
    backgroundColor: "#FF6186",
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    marginVertical: 15,
    color: colors.black,
    fontFamily: "Bold",
  },
  flexedBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelText: {
    fontSize: fontSize.h2,
    color: colors.black,
    fontWeight: fontWeight.bold,
  },
  fadeText: {
    fontSize: fontSize.h5,
    color: colors.borderGrey,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mtMargin: {
    marginTop: margin.m5,
  },
  boldText: {
    fontSize: fontSize.h1,
    fontFamily: "Bold",
  },
  contact_info: {
    fontSize: fontSize.h2,
    marginVertical: margin.m1,
  },
  details: {
    backgroundColor: colors.white,
    padding: padding.p4,
    borderRadius: 10,
    elevation: 2,
  },
});

export default styles;
