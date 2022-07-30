import { StyleSheet } from "react-native";

import { colors, padding, fontSize } from "@constants";

export default StyleSheet.create({
  getVerifiedContainer: {
    backgroundColor: colors.white,
    padding: padding.p5,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: "1%",
    marginTop: "8%",
  },
  getVerifiedTextContainer: {
    width: "50%",
  },
  getVerifiedImageContainer: { width: 200, height: 200 },
  getVerifiedTextBody: { marginVertical: 25 },
  headingText: {
    fontFamily: "Bold",
    fontSize: fontSize.h2,
    padding: padding.p1,
  },
});
