import { StyleSheet } from "react-native";
import { margin, fontSize, colors, padding } from "@constants";

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 2,
  },
  image: {
    resizeMode: "contain",
  },
  selectContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.lightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    marginTop: "-40%",
    paddingTop: 50,
    elevation: 50,
  },
  btnInputContainer: {
    width: "75%",
    // marginTop: margin.m2,
  },
  inputContainer: {
    width: "85%",
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: colors.white,
    paddingHorizontal: padding.p2,
    borderRadius: 5,
  },
  inputText: {
    fontSize: fontSize.h3,
    color: colors.dark,
  },
  logoContainer: {
    marginHorizontal: margin.m2,
  },
});

export default styles;
