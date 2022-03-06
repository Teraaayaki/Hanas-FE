import { StyleSheet } from "react-native";

const button = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginTop: "30%",
  },
});

const colors = {
  primary: "#e69fb4",
  secondary: "#ff5e84",
  danger: "#DD5555",
  info: "#005484",
  info2: "#1400FF",
  white: "#FFFFFF",
  black: "#403F3C",
  light: "#F6F3E4",
  lightGrey: "#E8E8E8",
  dark: "#403F3C",
  placeholderText: "#AAA",
  background: "#E5E5E5",
};

const padding = {
  p1: "1%",
  p2: "2%",
  p3: "3%",
  p4: "4%",
  p5: "5%",
  p6: "6%",
};

const margin = {
  m1: "1%",
  m2: "2%",
  m3: "3%",
  m4: "4%",
  m5: "5%",
};

const fontSize = {
  title: 25,
  h1: 20,
  h2: 18, //not Final - check Figma
  h3: 15,
  h4: 14, //not Final - check Figma
  h5: 12, //not Final - check Figma
  p: 13, //not Final - check Figma
  label: 15,
  textInput: 13,
};

export { colors, button, fontSize, margin, padding };
