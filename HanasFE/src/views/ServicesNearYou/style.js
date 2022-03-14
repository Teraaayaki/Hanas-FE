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
    
});
