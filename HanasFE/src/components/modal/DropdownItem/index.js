import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const DropdownItem = ({ title }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <TouchableOpacity>
      <Text style={[styles.bgWhite, styles.px5, styles.py3]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;
