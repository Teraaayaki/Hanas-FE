import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import React, { useEffect, useState } from "react";

import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";
import Header from "@components/Header";
import ReviewsFlatlist from "@components/flatlist/ReviewsFlatlist";
import styles from "./style";

const Reviews = ({ navigation }) => {
  const [reviewData, setReviewData] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const getReviews = async () => {
    let token = await getItem("token");
    let { data } = await axios.get("/api/worker/get-feedback", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setReviewData(data.feedback);

    let overall = data.feedback.map((feedback) => {
      return feedback.rate;
    });
    const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    let overallAverage = average(overall);
    setOverallRating(overallAverage);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Reviews" />
      <View style={styles.textContainer}>
        <Text style={styles.ratingText}>Overall Rating</Text>
        <View style={styles.ratingContainer}>
          <Icon color="#FFD706" size={22} name="star" />
          <Text style={styles.fadeTextValues}>{overallRating}/5</Text>
        </View>
      </View>
      <ReviewsFlatlist navigation={navigation} data={reviewData} />
    </View>
  );
};

export default Reviews;
