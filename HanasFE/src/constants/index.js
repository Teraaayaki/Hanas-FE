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
  success: "#8bd948",
  danger: "#DD5555",
  info: "#005484",
  info2: "#8488FF",
  white: "#FFFFFF",
  black: "#000000",
  light: "#F6F3E4",
  lightGrey: "#E8E8E8",
  grey: "#808080",
  dark: "#403F3C",
  blue: "#005484",
  borderGrey: "#a1a1a1",
  placeholderText: "#AAA",
  background: "#E5E5E5",
  lightYellow: "#F6F3E4",
  middlePink: "#FAA9B5",
  muted75: "#444", //Black @ 75% transparency
  muted50: "#888", //Black @ 50% transparency
  muted25: "#BBB", //Black @ 25% transparency
  muted20: "#CCC", //Black @ 20% transparency
};

const padding = {
  p1: "1%",
  p2: "2%",
  p3: "3%",
  p4: "4%",
  p5: "5%",
  p6: "6%",
  p10: "10%",
  p20: "20%",
  p30: "30%",
};

const margin = {
  m1: "1%",
  m2: "2%",
  m3: "3%",
  m4: "4%",
  m5: "5%",
  m6: "6%",
  m10: "10%",
};

const fontSize = {
  title: 25,
  h1: 20, //Final
  h2: 18, //Final
  h3: 16, //Final
  h4: 14, //not Final - check Figma
  h5: 12, //Final
  p: 13, //not Final - check Figma
  label: 15,
  labelSmall: 10,
  textInput: 13,
  profileName: 20,
  services: 10,
};

const fontWeight = {
  bold: "bold",
  regular: "400",
  light: "100",
};

export { colors, button, fontSize, margin, padding, fontWeight };
