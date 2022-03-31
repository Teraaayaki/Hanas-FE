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
    marginTop: 10 , 
    borderTopEndRadius: 50, 
    borderTopStartRadius: 50, 
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: padding.p5 , 
    marginBottom: 120
  },
  profileDetailsContainer: {
      backgroundColor: colors.white, 
      marginVertical: 50, 
      padding: padding.p5, 
      borderWidth: 1, 
      borderColor: 
      colors.borderGrey, 
      borderRadius: 5
  },
  profileInfoContainer: {
    flex: 1,
    flexDirection: "row", 
    padding: padding.p5, 
    justifyContent: "space-between"
  },
  headingText: {
      fontWeight: fontWeight.bold, 
      fontSize: fontSize.h3, 
      padding: padding.p1
  },
  label: {
      fontSize: fontSize.p, 
      fontWeight: fontWeight.bold
  },
  values: {
      fontSize: fontSize.p, 
      color: colors.black
  },
  hr: {
      borderBottomColor: colors.borderGrey, 
      borderWidth: 1
  },
  hrFaded: {
    borderBottomColor: colors.borderGrey, 
    borderWidth: 1,
    opacity: 0.3,
    marginHorizontal: margin.m5
  },
  buttonContainer: {
    backgroundColor: colors.background,
    marginBottom: margin.m5,
  },
  buttonRow: {
    marginTop: margin.m5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexedView: {
    flex: 1, 
    alignItems: "center",
    marginHorizontal: margin.m1,
  },
  logout: {
    marginVertical: margin.m5,
    flexDirection: "row-reverse",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: padding.p5,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 80
  },
  buttonText: {
    marginLeft: margin.m3,
    fontSize: fontSize.h3,
    fontWeight: "bold",
    justifyContent: "flex-start"
  },
});

export default styles;
