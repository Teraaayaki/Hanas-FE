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
  dark: "#403f3c",
  placeholderText: "#AAA",
  background: "#E5E5E5",
};

export const text = {
  emailPlaceholder: "",
  passwordPlaceholder: "",
};

export const containerFlex = {
  body: 1,
  preLogin: 0.65,
};

export const padding = {
  p1: 5,
  p2: 10,
  p3: 15,
  p4: 20,
  p5: 25,
};

export const margin = {
  m1: 5,
  m2: 10,
  m3: 15,
  m4: 20,
  m5: 25,
};

export const fontSize = {
  h1: 20, //not Final - check Figma
  h2: 18, //not Final - check Figma
  h3: 16, //not Final - check Figma
  h4: 14, //not Final - check Figma
  h5: 12, //not Final - check Figma
  p: 13, //not Final - check Figma
  label: 15,
  textInput: 13,
};

export { colors, button };
