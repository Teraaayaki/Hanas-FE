import { StatusBar, StyleSheet } from "react-native";
import { margin, fontSize, colors, padding } from "@constants";

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    marginTop: margin.m3,
    marginBottom: margin.m2,
  },
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
    marginTop: "-50%",
    paddingTop: 50,
    elevation: 50,
  },
  btnInputContainer: {
    width: "75%",
    height: "60%",
  },
  inputContainer: {
    width: "85%",
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: colors.white,
    paddingHorizontal: padding.p2,
    borderRadius: 5,
  },
});

export default styles;
