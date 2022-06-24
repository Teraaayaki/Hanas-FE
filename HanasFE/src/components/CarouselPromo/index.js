import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { View, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const images = [
  {
    source: require("@images/anyaflyer.png"),
    buttonText: "Become a User Now!",
  },
  {
    source: require("@images/haitamaflyer.png"),
    buttonText: "Become a Worker now!",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  useEffect(() => {
    setEntries(images);
  }, []);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.source}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Button
          buttonStyle={styles.button}
          title={item.buttonText}
          onPress={() => navigation.navigate("RegisterClientWorker")}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;
