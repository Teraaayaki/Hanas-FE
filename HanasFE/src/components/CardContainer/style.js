import { StyleSheet} from "react-native";
import {margin, colors, padding, fontSize} from "@constants";
import { fontWeight } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        height: "auto", 
        width: "auto", 
        marginHorizontal: margin.m3, 
        marginTop: margin.m2,
        marginBottom: margin.m3, 
        borderColor: colors.borderGrey, 
        borderWidth: 1.5, 
        borderRadius: 15,
        flexDirection: "row",
        flexWrap: "nowrap",
        paddingVertical: padding.p3,
        backgroundColor: colors.white,
    },
    profileContainer: {
        flex: 1,
    },
    detailsContainer: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center",
        
    },
    fadeText: {
        flex: 1,
        fontSize: fontSize.h5,
        color: colors.borderGrey,
    },
    fadeTextValues: {
        flex: 1,
        fontSize: fontSize.h5,
        fontWeight: fontWeight.bold,
        color: colors.black,
    },
    name: {
        fontSize: fontSize.h3,
        fontWeight: fontWeight.bold,
    },
    profession: {
        fontSize: fontSize.textInput,
        color: colors.secondary,
    }
})

