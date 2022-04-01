import React, { useState } from "react";
import { View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors, fontWeight, margin } from "@constants";
import styles from "./styles";

const DropDownPickerTransactionHistory = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "September, 2021", value: "September, 2021" },
    { label: "January, 2021", value: "January, 2021" },
    { label: "February, 2021", value: "February, 2021" },
  ]);
  return (
    <DropDownPicker
      listMode="MODAL"
      placeholder="SORT BY"
      modalTitle="Sort By"
      searchable={false}
      modalProps={{
        animationType: "slide",
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={100}
      containerStyle={styles.container}
      style={styles.picker}
      ArrowDownIconComponent={({ style }) => (
        <Image
          source={require("@images/arrowDown.png")}
          style={styles.iconDrop}
        />
      )}
      dropDownContainerStyle={styles.dropContainer}
    />
  );
};

export default DropDownPickerTransactionHistory;
