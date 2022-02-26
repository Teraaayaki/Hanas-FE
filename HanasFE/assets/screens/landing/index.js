import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import {Image, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import styles from '../landing/style';

export default function Landing(props) {
  
  return (
    <View style={styles.container}>
       <Image style={styles.imageContainer} source={require('@images/hanasLogoSquared.png')}/>
      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.hanasLightText}>
                REGISTER
            </Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={['#e69fb4', '#ff5e84']} style={styles.linearGradient }>
        <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
            <Text style={styles.hanasLightText}>
                LOGIN
            </Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={[styles.hanasDarkText,{ marginTop: 15, fontWeight: 'bold'}]} onPress={() => props.navigation.navigate('Dashboard')}>
          Skip for now
      </Text>
    </View>
  )
}