import { StyleSheet } from "react-native";
import { Font } from "expo";
import { colors } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginTop: "10%",
  },
  text: {
    fontWeight: "bold",
    color: colors.hanasDarkText,
  },
  textContainer: {
    marginTop: "10%",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: "-30%",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pinkButtonContainer: {
    width: "100%",
    marginTop: "5%",
  },
  logo: {
    height: "50%",
    width: "130%",
  },
  
});
