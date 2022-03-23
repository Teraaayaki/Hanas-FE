import { StyleSheet } from "react-native";
import { colors, fontSize, margin, padding } from "@constants";

export default StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  titleContainer: {
    flexDirection: "column-reverse",
    flex: 0.3,
  },
  title: {
    fontSize: fontSize.title,
    paddingBottom: padding.p5,
  },
  formContainer: {
    width: "80%",
    marginTop: margin.m3,
    flex: 1.7,
  },
  labelContainer: {
    width: "100%",
    marginBottom: margin.m3,
  },
  rowLabelContainer: {
    width: "100%",
    marginBottom: margin.m5,
  },
  label: {
    fontSize: fontSize.label,
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
  },
  rowContainer: {
    flex: 1,
    paddingRight: padding.p3,
  },
  rowContainer2: {
    flex: 1,
    paddingLeft: padding.p2,
  },

  error: {
    color: colors.danger,
    fontWeight: "bold",
    alignSelf: "center",
    width: "100%",
    marginTop: "-3%",
    marginBottom: margin.m2,
  },

  buttonContainer: {
    marginVertical: margin.m5,
  },
});
