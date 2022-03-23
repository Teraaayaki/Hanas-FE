import { StyleSheet } from "react-native";
import { colors, fontSize } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  logo: {
    height: "50%",
    width: "100%",
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
    marginBottom: "15%",
  },
  text: { color: colors.secondary, fontWeight: "900", fontSize: fontSize.h2 },
  loadingContainer: {
    flexDirection: "column",
    flex: 1,
  },
});

export default styles;
