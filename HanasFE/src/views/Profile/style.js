import { StyleSheet, StatusBar } from "react-native";
import { colors, margin, padding, fontSize } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
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
  profileDetails: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: "hidden",
    marginTop: "-15%",
    padding: padding.p5,
    elevation: 150,
  },
  accountInfoContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingTop: padding.p5,
    paddingLeft: padding.p5,
    paddingRight: padding.p5,
    marginTop: margin.m6,
  },
  accountInfo: {
    marginHorizontal: margin.m5,
    marginVertical: margin.m5,
  },
  buttonContainer: {
    marginVertical: margin.m5,
  },
  headerBorder: {
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: 1,
  },
  infoHeader: {
    fontSize: fontSize.h3,
    fontWeight: "bold",
    padding: padding.p3,
  },
  infoName: {
    fontWeight: "bold",
    marginVertical: margin.m1,
  },
  infoText: {
    flexShrink: 1,
    padding: padding.p1,
  },
  data: {
    flexShrink: 1,
  },
  textLink: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonRow: {
    marginTop: margin.m5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logout: {
    marginVertical: margin.m15,
    flexDirection: "row-reverse",
  },
  logoutText: {
    fontWeight: "bold",
  },
});

export default styles;
