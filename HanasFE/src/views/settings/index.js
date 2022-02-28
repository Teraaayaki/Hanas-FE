import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from '../profile/style';

class Settings extends React.Component{
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.goBack}>
                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.buttonText}>
                        Go back
                    </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

export default Settings;

