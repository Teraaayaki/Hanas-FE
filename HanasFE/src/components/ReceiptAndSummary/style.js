import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { fontSize, padding, margin, fontWeight} from "@constants";

export default StyleSheet.create({
  container: {
      flex: 1,
    },
  receiptContainer: {
      flex: 1, 
      backgroundColor: colors.white, 
      marginHorizontal:margin.m5, 
      marginVertical: "20%", 
      borderRadius: 10, 
      padding: padding.p5
    },
    receiptTitle: {
        fontSize: fontSize.h1, 
        fontWeight: "700", 
        letterSpacing: 1.5 
    },
    boxContainer: {
        flex: 3, 
        borderRadius: 12, 
        borderWidth: 1.5, 
        borderColor: colors.borderGray, 
        marginTop: margin.m3
    },
    flexContainers: {
        flexDirection: "row", 
        paddingVertical: padding.p3, 
        paddingHorizontal: padding.p4, 
        justifyContent: "space-between"
    },
    headings: {
        fontSize: fontSize.p, 
        fontWeight: fontWeight.bold,
        color: colors.borderGray,
        opacity: 0.3
    },
    values: {
        fontSize: fontSize.labelSmall, 
        color: colors.black, 
        fontWeight: fontWeight.regular,
        marginTop: margin.m1,
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: margin.m4
    },
    flexContainerInside : {
        flexDirection: "row", 
        paddingVertical: padding.p3, 
        paddingHorizontal: padding.p4, 
        justifyContent: "space-between",
        marginRight: margin.m5,
    },
    blackHeadings: {
        fontSize: fontSize.p, 
        color: colors.black,
    },
    boldHeadings: {
        fontSize: fontSize.h3, 
        color: colors.black,
        fontWeight: fontWeight.bold,
    },
    serviceHeader: {
        marginTop: margin.m3,
        fontSize: fontSize.h1, 
        fontWeight: "700", 
        letterSpacing: 1.5 
    },
    serviceContainer: {
        paddingVertical: padding.p3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    valuesContainer: {
        paddingHorizontal: padding.p4,
        flexDirection: "column",
        width: 150
    },
    smallHeadings: {
        fontSize: fontSize.p,
        color: colors.borderGray,
        opacity: 0.3
    },
    valueForSmallHeadings: {
        fontSize: fontSize.h4,
        color: colors.black,
    }
});
