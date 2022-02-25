import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },

  container: {
    flex: 0.65,
    // backgroundColor: "#333",
    flexDirection: "column",
  },

  logoContainer: {
    flex: 0.35,
    // backgroundColor: "#F00",
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  logo: {
    height: 177,
    width: "130%",
  },

  formContainer: {
    flex: 0.4,
    alignItems: "center",
  },

  labelContainer: {
    width: "100%",
    paddingLeft: 5,
  },

  label: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#403f3c",
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

  hanasPinkButton: {
    backgroundColor: "#ff5e84",
    height: 52,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  bgColor: {
    color: "#f6f3e4",
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
});
