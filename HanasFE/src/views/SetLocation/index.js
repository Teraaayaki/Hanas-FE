import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from "react-redux";

import { colors } from "@constants";
import Button from "@components/Button";
import Header from "@components/Header";
import styles from "./style";
import { setLocation } from "@redux/actions/registerActions";
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
  const [status, setStatus] = useState("");

  const handleRegionChange = (region) => {
    setRegion({ ...region });
  };

  const handleSetLocation = async () => {
    if (status !== "granted") {
      alert(
        "Please enable location access. Go to Setting > Apps > Hanas > App Permissions. "
      );
      return;
    }

    let input = inputElem.current;

    // Reverse Geocoding
    // let { results } = await Geocoder.from(region.latitude, region.longitude);
    try {
      let results = await Location.reverseGeocodeAsync({
        latitude: region.latitude,
        longitude: region.longitude,
      });

      // if results is empty
      if (!results.length) {
        return;
      }

      // extract object from array
      const result = results[0];
      console.log(result);
      // If vicinity is within cebu

      if (result.subregion !== "Cebu") {
        setAddress("Invalid Location");
        setErrMessage("Location Currently Unsupported");
        input.shake();
        return;
      }

      // Sanitize address
      console.log(`${result.name}, ${result.city}, ${result.subregion}`);
      setAddress(`${result.name}, ${result.city}, ${result.subregion}`);
      setErrMessage("");
    } catch (err) {
      alert("Error getting address: ", err.message);
      return;
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
      let { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== "granted") {
        alert("Permission to access location was denied.");
        return;
      }

      setStatus(locationStatus);

      try {
        let location = await Location.getCurrentPositionAsync({});

        setRegion({
          ...region,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (err) {
        alert("Error getting address: ", err.message);
        return;
      }
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
              value={address}
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
