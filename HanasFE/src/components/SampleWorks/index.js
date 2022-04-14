import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image, Dimensions } from "react-native";

import styles from "./style";

const SampleWorks = ({ DATA }) => {
  const renderItems = ({ item }) => {
    return (
      <View style={styles.renderedContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={"tinder"}
        data={DATA}
        sliderWidth={320}
        itemWidth={310}
        renderItem={renderItems}
        onSnapToItem={(index) => setIndex({ index })}
        hasParallaxImages={true}
        overScrollMode={"always"}
      />
    </View>
  );
};

export default SampleWorks;
