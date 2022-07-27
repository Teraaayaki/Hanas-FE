import { StyleSheet } from "react-native";
import { fontSize, margin } from "@constants";

export default StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 350, height: 200 },
  textTitle: { fontSize: 30, fontFamily: "Bold", marginBottom: margin.m1 },
  text: { fontSize: fontSize.h3, fontFamily: "Regular" },
  refreshText: {
    textDecorationLine: "underline",
    color: "blue",
    fontSize: fontSize.h3,
  },
});
