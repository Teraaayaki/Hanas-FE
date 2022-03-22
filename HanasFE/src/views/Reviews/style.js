import { StyleSheet } from "react-native";
import {margin, padding, colors} from "@constants";

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
});

export default styles;
