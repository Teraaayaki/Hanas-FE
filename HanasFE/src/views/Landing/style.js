import { StyleSheet } from "react-native";
import { Font } from "expo";
import { colors } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: "-40%",
    color: colors.dark,
    fontWeight: "bold",
  },
  logoContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: "50%",
  },
  buttonContainer: {
    marginTop: "20%",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pinkButtonContainer: {
    width: "65%",
    marginTop: "5%",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  content: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
