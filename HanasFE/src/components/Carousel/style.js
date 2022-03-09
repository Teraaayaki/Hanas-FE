import { StyleSheet, Dimensions} from "react-native";

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
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
        height: 150,
        marginLeft: 25,
    }
})