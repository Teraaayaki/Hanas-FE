import React, { useState } from "react";
import { Alert, Modal, Text, ScrollView, View } from "react-native";

import DropdownItem from "../DropdownItem";
import styles from "./styles";

const DropdownList = ({ title }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.alignCenter, styles.mt12]}>
          <View
            style={[
              styles.bgWhite,
              styles.w75,
              styles.rounded,
              styles.border,
              styles.borderMuted50,
              styles.maxheight75,
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
              {title}
            </Text>
            <ScrollView style={[styles.temp1, styles.dropdownItem]}>
              <DropdownItem title={"Item 1"} onPress={""} />
              <DropdownItem title={"Item 2"} onPress={""} />
              <DropdownItem title={"Item 3"} onPress={""} />
              <DropdownItem title={"Item 4"} onPress={""} />
              <DropdownItem title={"Item 5"} onPress={""} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
              <DropdownItem title={"Item 5"} />
            </ScrollView>
            <View style={styles.py3}></View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownList;
