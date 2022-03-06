import { StyleSheet } from "react-native";
import { colors } from "@constants";

export default StyleSheet.create({
  //-------------Reusable Containers-----------------
  screen: {
    flex: 1,
  },

  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },

  content: {
    flex: 0.65, //Will Fix Soon...
    flexDirection: "column",
  },

  //--------------------Logo---------------------

  logoContainer: {
    flex: 4,
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  //----------------------Form---------------------------

  formContainer: {
    flex: 6,
    alignItems: "center",
  },

  labelContainer: {
    width: "100%",
    padding: 5,
  },

  dark: {
    color: colors.dark,
  },

  secondary: {
    color: colors.secondary,
  },

  //-------------------Reusables-----------------------

  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
});
