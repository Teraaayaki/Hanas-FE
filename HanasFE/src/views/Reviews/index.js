import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import React, { useEffect, useState } from "react";

import axios from "@axios";
import Loading from "@components/Loading";
import { getItem } from "@helpers/asyncStorage";
import NoDataImage from "@components/NoDataImage";
import Header from "@components/Header";
import ReviewsFlatlist from "@components/flatlist/ReviewsFlatlist";
import { loadingStyle } from "@constants";
import styles from "./style";
import useIsWorker from "@hooks/useIsWorker";

const Reviews = ({ navigation }) => {
  const [reviewData, setReviewData] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prevPage, setPrevPage, handleBackButton] = useIsWorker();

  const getReviews = async () => {
    setLoading(true);
    try {
      let token = await getItem("token");
      let { data } = await axios.get("/api/worker/get-feedback", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (data.feedback.length === 0) {
        setLoading(false);
        return;
      }

      setReviewData(data.feedback);

      let overall = data.feedback.map((feedback) => feedback.rate);
      const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
      let overallAverage = average(overall);
      setOverallRating(overallAverage);
      console.log("hehe");
      setLoading(false);
      return;
    } catch (err) {
      console.log("Error in Reviews Page");
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <Header title="Reviews" showButton={true} onPress={handleBackButton} />
        <View style={loadingStyle.position}>
          <Loading title="Fetching Reviews" />
        </View>
      </View>
    );

  return (
    <View style={styles.container}>
      <Header title="Reviews" showButton={true} onPress={handleBackButton} />
      <>
        {reviewData.length === 0 ? (
          <>
            <NoDataImage refresh={true} onPress={getReviews} />
          </>
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.ratingText}>Overall Rating</Text>
              <View style={styles.ratingContainer}>
                <Icon color="#FFD706" size={22} name="star" />
                <Text style={styles.fadeTextValues}>
                  {overallRating === 0 ? 0 : overallRating.toFixed(2)}/5
                </Text>
              </View>
            </View>
            <ReviewsFlatlist navigation={navigation} data={reviewData} />
          </>
        )}
      </>
    </View>
  );
};

export default Reviews;
