import { View, Text, ScrollView, TextInput, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import styles from "./style";
import Header from "@components/Header";
import { addFeedback, resetSuccess, resetError } from "@redux/actions/feedbackActions";
import { colors } from "@constants";
import { useSelector, useDispatch } from "react-redux";
import { ToastComponent, showToast } from "@helpers/toast";
import CircularProfileImage from "@components/CircularProfileImage";
import Button from "@components/Button";
import { Rating, AirbnbRating } from "react-native-ratings";

const feedback_details = {
  comment: "",
};

const Feedback = ({ navigation, route }) => {
  const [rating, setRating] = useState(0);

  const { workerData, serviceData, booking_id } = route.params;
  const { user } = useSelector((state) => state.userDetails);
  const { error, loading, success } = useSelector((state) => state.addFeedback);

  const dispatch = useDispatch();

  const handleSubmit = (values, rating) => {
    const Data = {
      values,
      rate: rating,
      client: user.id,
      worker: workerData._id,
      my_service_id: serviceData._id,
      _id: booking_id,
    };

    dispatch(addFeedback(Data));
  };

  useEffect(() => {
    if (success) {
      showToast(
        "success",
        "Successfully given a feedback",
        "Thank you for your feedback",
        () => {
          dispatch(resetSuccess());
          navigation.navigate("Calendar");
        },
      );
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      showToast("error", "Something went wrong", error, () => dispatch(resetError()));
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Header title="Worker Feedback" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.centeredContainer}>
          <View style={styles.profileContainer}>
            <CircularProfileImage imageSource={workerData.profile_pic} />
            <Text
              style={styles.workerName}
            >{`${workerData.first_name} ${workerData.family_name}`}</Text>
            <Text style={styles.servicesName}>
              {`${serviceData.serviceNameData[0].service_type} Services`}
            </Text>
          </View>

          <Formik
            initialValues={feedback_details}
            onSubmit={(values) => handleSubmit(values, rating)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <Text style={styles.centeredText}>How was the work?</Text>
                <Rating
                  type={"custom"}
                  startingValue={0}
                  showRating
                  onFinishRating={(value) => setRating(value)}
                  fractions={2}
                  minValue={1}
                  jumpValue={0.5}
                  ratingTextColor={"black"}
                />
                <View style={{ marginTop: 25 }}>
                  <Text style={styles.centeredText}>Give worker a comment</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    placeholder={"Help us improve and start here..."}
                    style={styles.textInputStyle}
                    value={values.comment}
                    onChangeText={handleChange("comment")}
                  />
                </View>

                <View style={styles.buttonStyle}>
                  <Button
                    title="Submit Feedback"
                    loading={loading}
                    onPress={handleSubmit}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Calendar")}
                  >
                    Later
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
      <ToastComponent />
    </View>
  );
};

export default Feedback;
