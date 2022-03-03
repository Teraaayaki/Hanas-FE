import React from "react";
import { Image, Text, View} from "react-native";
import { SafeAreaView } from "react-navigation";

import Button from "@components/Button";
import styles from "./style";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@images/hanasLogoSquared.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.pinkButtonContainer}>
              <Button
                onPress={() => navigation.navigate("RegisterClientWorker")}
                title="REGISTER"
              />
            </View>
            <View style={styles.pinkButtonContainer}>
              <Button onPress={() => navigation.navigate("Login")} title="LOGIN" />
            </View>
        </View>
          
        
        <View style={styles.textContainer}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Dashboard")}
          >
            Skip for now
          </Text>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

export default Landing;
