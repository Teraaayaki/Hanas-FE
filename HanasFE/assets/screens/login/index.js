import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import styles from '../dashboard/style';

export default function LogIn (props){    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>
                    Go to Settings
                </Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
