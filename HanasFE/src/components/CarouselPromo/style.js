import { StyleSheet, Platform, Dimensions } from "react-native";

import { colors } from "@constants";

const { width: screenWidth } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    // backgroundColor: "red",
    marginLeft: -20,
    marginTop: "5%",
  },
  button: { backgroundColor: colors.secondary },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 20,
    // backgroundColor: "blue",
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 10,
    // backgroundColor: "yellow",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});
