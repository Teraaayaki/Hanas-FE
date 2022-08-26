import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { useDispatch } from "react-redux";

import { colors } from "@constants";
import Button from "@components/Button";
import Header from "@components/Header";
import styles from "./style";
import { setLocation } from "@redux/actions/registerActions";
// import Location from "@helpers/location";
import * as Location from "expo-location";

let regionDefault = {
  longitude: 123.893078,
  latitude: 10.309608,
  longitudeDelta: 0.9,
  latitudeDelta: 0.9,
};

const SetLocation = ({ navigation, route }) => {
  const { nextPage } = route.params;
  const [region, setRegion] = useState(regionDefault);
  const [address, setAddress] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const inputElem = useRef();
  const dispatch = useDispatch();
  const [status] = Location.useForegroundPermissions();

  const handleRegionChange = (region) => {
    setRegion({ ...region });
  };

  const handleSetLocation = async () => {
    if (status !== "granted") {
      alert("Please enable location access");
      return;
    }

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
      dispatch(setLocation(address, navigation, nextPage));
    }
  };

  useEffect(() => {
    const locationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    };

    locationPermission();
  }, []);

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
