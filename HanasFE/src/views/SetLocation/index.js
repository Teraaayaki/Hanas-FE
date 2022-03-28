import React, { useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import { colors } from "@constants";
import Button from "@components/Button";
import Header from "@components/Header";
import styles from "./style";

let regionDefault = {
  longitude: 123.893078,
  latitude: 10.309608,
  longitudeDelta: 0.9,
  latitudeDelta: 0.9,
};

const SetLocation = ({ navigation }) => {
  const [region, setRegion] = useState(regionDefault);
  const [address, setAddress] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const inputElem = useRef();

  const handleRegionChange = (region) => {
    setRegion({ ...region });
  };

  const handleSetLocation = async () => {
    let input = inputElem.current;
    let { results } = await Geocoder.from(region.latitude, region.longitude);
    if (results[0].formatted_address.includes("Cebu")) {
      setAddress(results[0].formatted_address);
      setErrMessage("");
    } else {
      setAddress("Invalid Location");
      setErrMessage("Location Currently Unsupported");
      input.shake();
    }
  };

  const handleSubmitLocation = () => {
    let input = inputElem.current;
    if (address === "") {
      setErrMessage("No address selected");
      input.shake();
      setTimeout(() => {
        setErrMessage("");
      }, 2000);
    } else {
      console.log("Address selected: " + address);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Set Location" />
      <MapView
        style={styles.mapContainer}
        region={region}
        onRegionChangeComplete={(region) => handleRegionChange(region)}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Pin here"
          description="Choose you address"
        />
      </MapView>
      <View style={styles.selectContainer}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleSetLocation}>
            <Input
              label="Press here to select address"
              labelStyle={{
                ...styles.label,
                color: errMessage !== "" ? colors.danger : colors.dark,
              }}
              ref={inputElem}
              disabled={true}
              inputContainerStyle={{
                ...styles.input,
                borderBottomColor: errMessage !== "" ? colors.danger : "grey",
              }}
              inputStyle={styles.inputText}
              leftIconContainerStyle={styles.logoContainer}
              placeholder="Cebu City, Cebu"
              value={address.substring(0, address.lastIndexOf(", "))}
              leftIcon={<Icon name="explore" size={24} color={colors.dark} />}
              errorMessage={errMessage}
              errorStyle={styles.errMessage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInputContainer}>
          <Button title="SET LOCATION" onPress={handleSubmitLocation} />
        </View>
      </View>
    </View>
  );
};

export default SetLocation;
