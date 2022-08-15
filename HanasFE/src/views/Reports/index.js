import { Text, TextInput, ScrollView, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Button as ElemButton } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import {
  pickImage,
  filterUri,
  uploadImageWithUrl,
  createFormdataArray,
} from "@utils/imageUtils";
import axios from "@helpers/axios";
import AttachImage from "@components/AttachImage";
import Button from "@components/Button";
import Header from "@components/Header";
import styles from "./style";
import { showToast, ToastComponent } from "@helpers/toast";
import { getItem } from "@helpers/asyncStorage";
import useIsWorker from "@hooks/useIsWorker";

const concernData = [
  "Report a bug",
  "Misbehaving Client",
  "Misbehaving Worker",
  "Give Feedback",
  "Other Concern",
];

const Reports = () => {
  const [images, setImages] = useState([]);
  const [imagesUri, setImagesUri] = useState([]);
  const [concern, setConcern] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);
  const [prevPage, setPrevPage, handleBackButton] = useIsWorker();
  const navigation = useNavigation();

  const resetState = () => {
    setImages([]);
    setImagesUri([]);
    setMessage([]);
    setConcern([]);
    setSuccess(false);
  };

  const createReport = (images) =>
    new Promise((resolve, reject) => {
      let DATA = {
        concern,
        message,
        images,
      };
      axios
        .post(
          "api/reports/",
          { DATA },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  const handleSubmitPhoto = async () => {
    let result = await pickImage();
    if (!result.cancelled) {
      const { filename } = filterUri(result.uri);
      setImages([...images, filename]);
      setImagesUri([...imagesUri, result.uri]);
    }
  };

  const removeValidIdItem = (itemName) => {
    let filteredUriArray = imagesUri.filter((id) => !id.includes(itemName));
    let filteredArray = images.filter((id) => id !== itemName);
    setImages([...filteredArray]);
    setImagesUri([...filteredUriArray]);
  };

  const handleSubmitReport = async () => {
    if (loading) {
      return;
    }

    if (concern === "" || message === "") {
      showToast(
        "error",
        "Form incomplete",
        "Please choose a concern and add a message"
      );
      return;
    }

    try {
      setLoading(true);

      //   If no image attachement
      if (imagesUri.length === 0) {
        const { data } = await createReport([]);

        if (data) {
          setLoading(false);
          setSuccess(true);
          showToast(
            "success",
            data.message,
            "Redirecting you in 4 seconds",
            () => {
              resetState();
              navigation.navigate(prevPage);
            }
          );
        }
        return;
      }

      //   If there is image attachment
      let reportFormdata = createFormdataArray(imagesUri, "images");
      const response = await uploadImageWithUrl(
        reportFormdata,
        "api/reports/upload-image"
      );

      //   if Image successfully uploaded
      if (response.ok) {
        const { publicUrls } = await response.json();
        const { data } = await createReport(publicUrls);
        // console.log(publicUrls);
        if (data) {
          setSuccess(true);
          setLoading(false);
          showToast(
            "success",
            data.message,
            "Redirecting you in 4 seconds",
            () => {
              resetState();
              navigation.navigate(prevPage);
            }
          );
        }
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      showToast(
        "error",
        "There was an error while submitting the report",
        "Please try again."
      );
    }
  };

  useEffect(() => {
    (async () => {
      const fetchedToken = await getItem("token");
      setToken(fetchedToken);
    })();
  }, []);

  if (success)
    return (
      <View style={styles.successView}>
        <Header title="Report" />
        <View style={styles.successContainer}>
          <Image
            style={styles.successEnvelope}
            source={require("@images/envelope.png")}
          />
          <Text style={styles.successText}>You have submitted report!</Text>
          <Text style={styles.successInfoText}>
            You will be redirected automatically.
          </Text>
        </View>

        <ToastComponent />
      </View>
    );

  return (
    <ScrollView>
      <Header title="Report" showButton={true} onPress={handleBackButton} />
      <View style={styles.inputContainer}>
        <Text style={styles.headerTextStyle}>Found something unpleasant?</Text>
        <Text>
          We highly encourage you to submit a report. It will be reviewed by our
          team comprehensively. Expect a reply within 2-3 business days.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>
          Select a concern<Text style={styles.danger}> *</Text>
        </Text>
        <SelectDropdown
          data={concernData}
          defaultButtonText="No concern selected"
          buttonTextStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
          dropdownStyle={styles.dropdownStyle}
          onSelect={(selectedItem) => {
            setConcern(selectedItem);
            return selectedItem;
          }}
        />
        <Text style={styles.textStyle}>
          Message<Text style={styles.danger}> *</Text>
        </Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            label="Message"
            placeholder="Enter additional information relating to your concern..."
            multiline={true}
            numberOfLines={7}
            onChangeText={(e) => setMessage(e)}
          />
        </View>
        <Text style={styles.textStyle}>Attachments</Text>
        <View style={styles.imageContainer}>
          {images.length < 5 && (
            <ElemButton
              buttonStyle={{ borderRadius: 10 }}
              title="Add Image"
              type="outline"
              onPress={handleSubmitPhoto}
            />
          )}

          <View style={styles.imagesContainer}>
            {images.length > 0 &&
              images.map((image) => (
                <AttachImage
                  title={image}
                  key={image}
                  onRemove={() => {
                    removeValidIdItem(image);
                  }}
                />
              ))}
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Submit Report"
          onPress={handleSubmitReport}
          loading={loading}
        />
      </View>
      <ToastComponent />
    </ScrollView>
  );
};

export default Reports;
