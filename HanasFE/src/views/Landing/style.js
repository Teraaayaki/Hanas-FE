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
  text: {
    fontWeight: "bold",
    color: colors.hanasDarkText,
    marginTop: "-40%",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: "30%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: "30%",
  },
  logo: {
    height: "100%",
    width: "130%",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginTop: "10%",
  },
});
