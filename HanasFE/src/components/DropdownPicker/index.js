import React, { useState } from "react";
import { View, Image} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { colors, fontWeight, margin } from "@constants";
import styles from './style';

const DropdownPicker = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Name', value: 'name'},
      {label: 'Rate', value: 'rate'},
      {label: 'Rating', value: 'rating'}
    ]);
  return (
        <DropDownPicker
            listMode="SCROLLVIEW"
            placeholder="SORT BY"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={100}
            containerStyle={styles.container}
            style={styles.picker}
            ArrowDownIconComponent={({style}) => <Image source={require("@images/arrowDown.png")} style={styles.iconDrop}/>}
            dropDownContainerStyle={styles.dropContainer}
              
        />
  );
}

export default DropdownPicker;