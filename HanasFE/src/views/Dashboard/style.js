import { StyleSheet, StatusBar } from 'react-native';
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,  
    
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headerText: {
    fontSize: fontSize.title,
    color: colors.dark,
    fontWeight: fontWeight.bold,
    alignSelf: "center",
  },
  horizontalScrollContainer: {
    height: "auto",
  },
  textContainer: {
    flex: 1, 
    marginHorizontal: margin.m3, 
    flexDirection: "row", 
    justifyContent: "space-between",
    padding: padding.p3
  },
  labelText: {
    fontSize: fontSize.label,
  },
  fadeText: {
    fontSize: fontSize.h5,
    color: colors.borderGrey
  },
  btnPress: {
    borderRadius: 10,
    padding: 5,
  }
});
