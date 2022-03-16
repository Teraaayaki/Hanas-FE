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

const DropdownList = (props, { title }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={[
            styles.flex1,
            styles.w100,
            styles.alignCenter,
            styles.justifyContentCenter,
          ]}
        >
          <View style={[styles.alignCenter, styles.mt12, styles.w100]}>
            <View
              style={[
                styles.bgWhite,
                styles.w75,
                styles.rounded,
                styles.border,
                styles.borderMuted50,
                styles.maxheight75,
                styles.shadow,
              ]}
            >
              <Text
                style={[
                  styles.dropdownTitle,
                  styles.h4,
                  styles.bold,
                  styles.py5,
                  styles.px5,
                ]}
              >
                {props.title}
              </Text>
              <ScrollView style={[styles.temp1, styles.dropdownItem]}>
                <DropdownItem
                  title={"Item 1"}
                  setModalVisible={props.setModalVisible}
                />
                <DropdownItem
                  title={"Item 2"}
                  setModalVisible={props.setModalVisible}
                />
                <DropdownItem
                  title={"Item 3"}
                  setModalVisible={props.setModalVisible}
                />
              </ScrollView>
              <View style={styles.py3}></View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownList;
