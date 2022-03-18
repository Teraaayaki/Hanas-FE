import React from "react";
import { Alert, Modal, Text, ScrollView, View } from "react-native";

import DropdownItem from "../DropdownItem";
import styles from "./styles";

// Utilize the following code snippets on the Parent function (and Calling function):
//
// Import the useState prop:
// import React, { useState } from "react";
//
// Initializing state variables:
// const [dropdownVisible, setdropdownVisible] = useState(true);
//
// Rendering the Dropdown List Modal:
// <DropdownList title={""}modalVisible={dropdownVisible} setModalVisible={setDropdownVisible} />
//
// Toggling the Dropdown List Modal between Vsible and not Visible through an onPress Event:
// onPress={()=>setDropDownVisible(!dropdownVisible)}

const FullscreenImage = (props) => {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}
      >
        <View style={[styles.bgBlack, styles.w100, styles.h100]}>
          <Text>A</Text>
        </View>
      </Modal>
    </View>
  );
};

export default FullscreenImage;
