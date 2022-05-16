import { StyleSheet } from "react-native";
import {margin, padding, colors, fontSize} from "@constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },
    textContainer: {
        marginHorizontal: margin.m3,
        marginTop: margin.m3, 
        marginBottom: margin.m2,
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        padding: padding.p3,
        backgroundColor: colors.background,
    },
    emptyText: {
        color: colors.black,
        fontSize: fontSize.h2,
    },
    centeredEmptyText: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    },
});

export default styles;
