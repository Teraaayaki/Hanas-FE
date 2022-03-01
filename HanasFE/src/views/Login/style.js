import { StyleSheet } from "react-native";
import { colors } from "@constants";

export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },

  content: {
    flex: 0.65,
    flexDirection: "column",
  },

  //--------------------Logo---------------------

  logoContainer: {
    flex: 0.4,
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  logo: {
    height: 177,
    width: "130%",
  },

  //----------------------Form---------------------------

  formContainer: {
    flex: 0.35,
    alignItems: "center",
  },

  labelContainer: {
    width: "100%",
    padding: 5,
  },

  label: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#403f3c",
    fontSize: 15,
  },

  input: {
    height: 46,
    width: "100%",
    marginTop: 7,
    marginBottom: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    color: "#403f3c",
    fontSize: 13,
    justifyContent: "center",
  },

  //-------------------Login Button-------------------------
  hanasPinkButton: {
    marginTop: 20,
    padding: 5,
    width: "100%",
    height: 52,
    alignItems: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  //-------------------Reusables-----------------------

  rowContainer: {
    flexDirection: "row",
  },

  bgColor: {
    color: "#f6f3e4",
  },
  secondary: {
    color: "#403F3C",
  },
  dark: {
    color: "#403f3c",
  },
  pink: {
    color: "#ff5e84",
  },
  white: {
    color: "#FFFFFF",
  },

  f13: {
    fontSize: 13,
  },

  pt3: {
    paddingTop: 15,
  },

  pr2: {
    paddingRight: 10,
  },

  width100: {
    width: "100%",
  },
});
