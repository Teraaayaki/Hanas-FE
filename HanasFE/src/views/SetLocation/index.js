import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import { colors } from "@constants";
import Button from "@components/Button";
import Header from "@components/Header";
import styles from "./style";

const SetLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Set Location" />
      <View style={styles.mapContainer}>
        <Image style={styles.image} source={require("@images/maps.jpg")} />
      </View>
      <View style={styles.selectContainer}>
        <View style={styles.inputContainer}>
          <Input
            inputContainerStyle={styles.input}
            placeholder="Search for Address..."
            leftIcon={<Icon name="search" size={24} color={colors.dark} />}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Input
              disabled={true}
              inputContainerStyle={styles.input}
              placeholder="Use Current Location..."
              leftIcon={<Icon name="explore" size={24} color={colors.dark} />}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInputContainer}>
          <Button
            title="SET LOCATION"
            onPress={() => navigation.navigate("GetVerified")}
          />
        </View>
      </View>
    </View>
  );
};

export default SetLocation;
