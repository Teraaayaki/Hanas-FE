import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { containerFlex } from "@constants";
import { fontSize } from "@constants";

export default StyleSheet.create({
  //-------------Reusable Containers-----------------
  screen: {
    flex: 1,
  },

  body: {
    flex: containerFlex.body,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },

  content: {
    flex: containerFlex.preLogin,
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

  rowContainer: {
    flexDirection: "row",
  },

  p: {
    fontSize: fontSize.p,
  },

  pt3: {
    paddingTop: 15,
  },

  pr2: {
    paddingRight: 10,
  },

  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
});
