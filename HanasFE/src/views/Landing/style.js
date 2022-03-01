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
  imageContainer: {
    marginBottom: 100,
    height: 177,
    width: 347,
  },
  text: {
    marginTop: 15,
    fontWeight: "bold",
    color: colors.hanasDarkText,
  },
});
