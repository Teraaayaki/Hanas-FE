import { StyleSheet } from "react-native";
import { margin, padding, colors, fontSize } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 40,
    backgroundColor: "white",
  },
  centeredText: {
    alignSelf: "center",
    fontSize: fontSize.h1,
  },
  transparent: {
    color: colors.info2,
  },
  buttonStyle: {
    marginHorizontal: 50,
    marginTop: 30,
  },
  buttonStyle2: {
    marginTop: 10,
    marginHorizontal: 50,
  },
  textInputStyle: {
    height: 100,
    textAlignVertical: "top",
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
  },
  workerName: {
    fontFamily: "Bold",
    fontSize: fontSize.h1,
  },
  servicesName: {
    fontFamily: "Regular",
    fontSize: fontSize.h3,
    color: colors.secondary,
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  text: {
    // marginTop: "-40%",
    color: colors.dark,
    fontFamily: "Bold",
  },
});

export default styles;
