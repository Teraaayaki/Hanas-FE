import { StyleSheet, StatusBar} from "react-native";
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGrey,
    },
    header: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: padding.p10,
    },
    scrollContainer: {
        flex: 1,
    },
    headerText: {
        fontSize: fontSize.title,
        color: colors.dark,
        fontWeight: fontWeight.bold,
        marginTop: margin.m6,
        alignSelf: "center",
    },
    servicesContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        height: "100%",
        marginVertical: margin.m3,
    }
});

export default styles;
