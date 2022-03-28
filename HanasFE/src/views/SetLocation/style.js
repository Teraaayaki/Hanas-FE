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
    flex: 0.5,
    backgroundColor: colors.lightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    marginTop: "-40%",
    paddingBottom: 60,
    paddingTop: 20,
    elevation: 10,
  },
  btnInputContainer: {
    width: "75%",
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: padding.p2,
    borderRadius: 5,
  },
  inputText: {
    fontSize: fontSize.h3,
    color: colors.dark,
  },
  logoContainer: {
    paddingHorizontal: padding.p2,
  },
  errMessage: {
    color: colors.danger,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: fontSize.h3,
  },
  label: {
    paddingBottom: padding.p2,
  },
});

export default styles;
