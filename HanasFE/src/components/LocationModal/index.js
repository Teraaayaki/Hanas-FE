import { View, FlatList } from "react-native";
import { Icon, Overlay, ListItem } from "react-native-elements";
import React, { useState } from "react";
import TouchableScale from "react-native-touchable-scale";

import cities from "@helpers/municipalities";
import styles from "./style";
import { colors } from "@constants";

const LocationModal = ({ visible, onBackdropPress, setAddress }) => {
  const [cityArray, setCityArray] = useState(cities);

  const keyExtractor = (city) => city.id;

  const setNewAddress = (newAddress) => {
    setAddress(newAddress);
    onBackdropPress();
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        bottomDivider
        onPress={() => {
          setNewAddress(item.municipality);
        }}
      >
        {/* <Avatar /> */}
        <ListItem.Content>
          <ListItem.Title>{item.municipality}</ListItem.Title>
          {/* <ListItem.Subtitle>{item.municipality}</ListItem.Subtitle> */}
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <Overlay
      visible={visible}
      onBackdropPress={onBackdropPress}
      backdropStyle={{ opacity: 0.2 }}
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.icon}>
        <Icon
          name="map-marked-alt"
          type="font-awesome-5"
          color={colors.secondary}
        />
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        data={cityArray}
        renderItem={renderItem}
      />
    </Overlay>
  );
};

export default LocationModal;
