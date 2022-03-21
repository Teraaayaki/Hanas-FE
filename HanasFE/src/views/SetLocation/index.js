import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Icon } from "react-native-elements";
import MapView from "react-native-maps";

import Loading from "@components/Loading";
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
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      {!mapLoaded ? (
        <Loading title="Loading Map..." />
      ) : (
        <>
          <Header title="Set Location" />
          <MapView
            style={styles.mapContainer}
            region={region}
            onRegionChangeComplete={(region) => {
              setRegion(region);
            }}
          />
          <View style={styles.selectContainer}>
            <View style={styles.inputContainer}>
              <Input
                inputContainerStyle={styles.input}
                placeholder="Search for Address..."
                inputStyle={styles.inputText}
                leftIconContainerStyle={styles.logoContainer}
                leftIcon={<Icon name="search" size={24} color={colors.dark} />}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity>
                <Input
                  disabled={true}
                  inputContainerStyle={styles.input}
                  inputStyle={styles.inputText}
                  leftIconContainerStyle={styles.logoContainer}
                  placeholder="Use Current Location..."
                  leftIcon={
                    <Icon name="explore" size={24} color={colors.dark} />
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btnInputContainer}>
              <Button
                title="SET LOCATION"
                onPress={() => navigation.navigate("GetVerified")}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default SetLocation;
