import React from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./style";

export default ({
  iconName,
  iconType,
  iconSize,
  keyboardType,
  placeholder,
  value,
  onChangeText,
  editable,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconContainer}>
        <Icon
          name={iconName}
          type={iconType}
          style={styles.icon}
          size={iconSize}
        />
      </View>
      <TextInput
        style={styles.textInput}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"#AAA"}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
