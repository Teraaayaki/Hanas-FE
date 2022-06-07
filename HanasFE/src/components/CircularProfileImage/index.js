import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";

const CircularProfileImage = ({ imageSource, onPress }) => {
  const [source, setSource] = useState(null);

  useEffect(() => {
    if (imageSource === "none") {
      setSource({
        uri: "https://storage.googleapis.com/hanas/hanas-images/default.png",
      });
    } else {
      setSource({ uri: imageSource });
    }
  }, [imageSource]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={styles.dimension} />
    </TouchableOpacity>
  );
};

export default CircularProfileImage;
