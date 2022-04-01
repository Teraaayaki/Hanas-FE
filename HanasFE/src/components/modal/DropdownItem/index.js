import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const DropdownItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.setModalVisible(false)}>
      <Text style={[styles.bgWhite, styles.px5, styles.py3]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;
