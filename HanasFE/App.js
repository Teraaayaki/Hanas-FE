import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>
            Go to Profile
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.buttonText}>
            Go to Notifications
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.goBack} >
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>
            Go back
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.linearGradient}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>
          Go to Settings
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.goBack}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>
            Go back
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient colors={['#e69fb4', '#ff5e84']}  style={styles.goBack}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>
            Go back
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const Stack = createStackNavigator();

function HanasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HanasStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 50/2,
  },
  goBack: {
    marginTop: 15,
    padding: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 50/2,
  },
  buttonText: {
    fontSize: 16,
  }
});