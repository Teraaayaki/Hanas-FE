import { StyleSheet } from "react-native";
import { colors, fontSize } from "@constants";

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
  logo: {
    height: 177,
    width: "130%",
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
  input: {
    height: 46,
    width: "100%",
    marginTop: 7,
    marginBottom: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    color: colors.hanasDarkText,
    fontSize: fontSize.textInput,
    justifyContent: "center",
  },
  label: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: colors.dark,
    fontSize: fontSize.label,
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
