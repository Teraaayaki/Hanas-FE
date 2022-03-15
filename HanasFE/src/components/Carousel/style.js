import { StyleSheet, Dimensions} from "react-native";
import { margin } from "../../constants";

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
      },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
      },
    image: {
    ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    renderedContainer: {
        borderRadius: 5,
        height: 200,
    },
    carouselContainer: {
      flex: 1, 
      flexDirection: "row", 
      justifyContent: "center", 
      marginLeft: 0,
      marginRight: 10,
      marginVertical: "5%",
    }
})