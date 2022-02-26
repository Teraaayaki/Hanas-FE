import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from '../profile/style';

export default function Profile (props){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
                <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
                <Text style={styles.buttonText}>
                    Go to LogIn
                </Text>
                </TouchableOpacity>
            </LinearGradient>

            <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.goBack} >
                <TouchableOpacity  onPress={() => props.navigation.goBack()}>
                <Text style={styles.buttonText}>
                    Go back
                </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}


