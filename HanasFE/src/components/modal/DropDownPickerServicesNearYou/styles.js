import { StyleSheet } from "react-native";
import { fontSize, colors } from "@constants";

export default StyleSheet.create({
  container: {
    height: 35,
    marginLeft: "25%",
  },
  picker: {
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(255, 94, 132, .25)",
    width: "35%",
    height: 40,
  },
  iconDrop: {
    width: 20,
    height: 20,
  },
  dropContainer: {
    backgroundColor: colors.white,
  },
});
