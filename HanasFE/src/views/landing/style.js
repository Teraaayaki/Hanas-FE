import { StyleSheet } from 'react-native';
import { Font } from 'expo';

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#E5E5E5"
    },
    hanasLightText: {
        color: '#f6f3e4',
    },
    hanasDarkText: {
        color: '#403f3c',
    },
    linearGradient: {
        marginTop: 20,
        padding: 5,
        width: 200,
        height: 50,
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
    imageContainer:{
        marginBottom: 100,
        height: 177,
        width: 347,
    }
  });