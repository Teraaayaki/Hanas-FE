import React from 'react';
import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";


const TypeOfService = ({ title }) => {
  return (
    <Text style={styles.labelText}>{title}</Text>
  );
};

export default TypeOfService;
