import React from "react";
import { View, TextInput, Text } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./style";
import { colors } from "@constants";

export default ({
  iconName,
  iconType,
  iconSize,
  iconColor,
  keyboardType,
  placeholder,
  value,
  onChangeText,
  editable,
  secureTextEntry,
  error,
  autoCapitalize,
  mobileNum,
}) => {
  return (
    <View
      style={{
        ...styles.inputBox,
        borderBottomColor: error && colors.danger,
        borderBottomWidth: error && 2,
      }}
    >
      <View style={[styles.iconContainer]}>
        <Icon
          name={iconName}
          type={iconType}
          style={styles.icon}
          size={iconSize}
          color={iconColor}
        />
      </View>
      {mobileNum && (
        <View
          style={[
            styles.pl4,
            styles.pr5,
            styles.my2,
            styles.alignCenter,
            styles.justifyContentCenter,
            styles.borderRight,
            styles.borderMuted20,
          ]}
        >
          <Text style={[styles.h4, styles.textBlack]}>+63</Text>
        </View>
      )}
      <TextInput
        style={styles.textInput}
        autoCapitalize={autoCapitalize}
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
