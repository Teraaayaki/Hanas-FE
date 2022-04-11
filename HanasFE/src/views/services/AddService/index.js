import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import axios from "@helpers/axios";
import { colors } from "@constants";
import Header from "@components/Header";
import Button from "@components/Button";
import AttachImage from "@components/AttachImage";
import DropdownList from "@components/modal/DropdownList";
import { getItem } from "@helpers/asyncStorage";
import { addServiceWorker } from "@redux/actions/workerServiceActions";

const AddService = ({ navigation }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingCertificate, setUploadingCertificate] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const [service, setService] = useState("Electrical");
  const [ratePerHourValue, setRatePerHourValue] = useState("");
  const [description, setDescription] = useState("");
  const [sampleWorkImg, setSampleWorkImg] = useState([]);
  const [sampleWorkImgUrl, setSampleWorkImgUrl] = useState([]);
  const [certificateImg, setCertificateImg] = useState([]);
  const [certificateImgUrl, setCertificateImgUrl] = useState([]);

  const dispatch = useDispatch();
  const { error, success, loading, serviceType } = useSelector(
    (state) => state.workerServices
  );

  // Upload sample work image
  const pickImage = async () => {
    let token = await getItem("token");
    setUploadingImage(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append("sample", {
        uri: result.uri,
        type: type,
        name: filename,
      });
      if (result) {
        console.log("uploading sample work picture");
        let response = await fetch(
          `${process.env.HANAS_ENDPOINT}api/worker/upload-image-service`,
          {
            method: "POST",
            body: formData,
            headers: {
              "content-type": "multipart/form-data",
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          let { publicUrl } = await response.json();
          console.log(publicUrl);
          setSampleWorkImgUrl([...sampleWorkImgUrl, publicUrl]);
          setSampleWorkImg([...sampleWorkImg, filename]);
          setUploadingImage(false);
        } else {
        }
      }
    } else {
      setUploadingImage(false);
    }
  };

  // Remove sample work image
  const handleRemoveSampleWorkImg = async (imgName) => {
    console.log("deleting " + imgName);
    let token = await getItem("token");
    setUploadingImage(true);
    try {
      let { data } = await axios.post(
        "/api/worker/delete-image-service",
        { fileName: imgName },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) {
        setUploadingImage(false);
        setSampleWorkImg(sampleWorkImg.filter((img) => img !== imgName));
        setSampleWorkImgUrl(sampleWorkImgUrl.filter((img) => img !== imgName));
      }
    } catch (err) {
      console.log(err);
      setUploadingImage(false);
    }
  };

  // Upload certificate
  const pickCertificate = async () => {
    let token = await getItem("token");
    setUploadingCertificate(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append("certificate", {
        uri: result.uri,
        type: type,
        name: filename,
      });
      if (result) {
        console.log("uploading work certificate");
        let response = await fetch(
          `${process.env.HANAS_ENDPOINT}api/worker/upload-image-certificate`,
          {
            method: "POST",
            body: formData,
            headers: {
              "content-type": "multipart/form-data",
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          let { publicUrl } = await response.json();
          console.log(publicUrl);
          setCertificateImg([...certificateImg, filename]);
          setCertificateImgUrl([...certificateImgUrl, publicUrl]);
          setUploadingCertificate(false);
        } else {
        }
      }
    } else {
      setUploadingCertificate(false);
    }
  };

  // Remove Certificate
  const handleRemoveCertificate = async (imgName) => {
    console.log("deleting " + imgName);
    let token = await getItem("token");
    setUploadingCertificate(true);
    try {
      let { data } = await axios.post(
        "/api/worker/delete-image-certificate",
        { fileName: imgName },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) {
        setUploadingCertificate(false);
        setCertificateImg(certificateImg.filter((img) => img !== imgName));
        setCertificateImgUrl(
          certificateImgUrl.filter((img) => img !== imgName)
        );
      }
    } catch (err) {
      console.log(err);
      setUploadingCertificate(false);
    }
  };

  const handleSubmit = async () => {
    if (uploadingImage || uploadingCertificate) {
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 3000);
      return;
    }

    if (description !== "" && ratePerHourValue !== "") {
      console.log("Dispatched Action in Addservice");
      const serviceDetails = {
        service,
        description,
        ratePerHourValue: parseInt(ratePerHourValue),
        sampleWorkImgUrl,
        certificateImgUrl,
        lastUpdated: new Date(),
      };
      dispatch(addServiceWorker(serviceDetails, navigation));
    } else {
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission Denied, Cannot add a service");
        }
      }
    })();
  }, []);

  useEffect(() => {
    console.log("Error (Add Service): ", error);
    console.log("Success (Add Service): ", success);
  }, [error, success]);

  return (
    <ScrollView style={[styles.body]}>
      <DropdownList
        title={"Services List"}
        modalVisible={dropdownVisible}
        setModalVisible={setDropdownVisible}
        services={serviceType}
        setService={setService}
      />
      <Header title={"Add Service"} />
      <View
        style={[styles.flex1, styles.mx5, styles.my5, styles.pb5, styles.px4]}
      >
        <View style={[styles.flex1, styles.flexRow]}>
          <Text style={[styles.h2, styles.my2, styles.w50]}>
            Choose a Service
          </Text>
          <View style={[styles.w50, styles.pl4]}>
            <TouchableOpacity onPress={() => setDropdownVisible(true)}>
              <View
                style={[
                  styles.bgWhite,
                  styles.rounded,
                  styles.border,
                  styles.borderMuted50,
                  styles.px5,
                  styles.justifyContentCenter,
                  styles.alignCenter,
                  styles.h100,
                  styles.flexRow,
                ]}
              >
                <Text style={[styles.flex1]}>{service}</Text>
                <Icon
                  name="chevron-down-outline"
                  type="ionicon"
                  color={"#BBB"}
                  size={30}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.h4, styles.w100, styles.textJustify, styles.mt5]}>
          Help your clients get to know more about what you do by providing a
          description on your expertise and the service you offer.
        </Text>
        <Text style={[styles.h3, styles.bold, styles.mt5]}>Description</Text>
        <TextInput
          style={[styles.bgWhite, styles.mt2, styles.px4, styles.py2]}
          multiline={true}
          numberOfLines={3}
          placeholder={"Say something..."}
          value={description}
          onChangeText={(e) => setDescription(e)}
        />
        <Text style={[styles.h3, styles.bold, styles.mt5]}>Rate per Hour</Text>
        <View
          style={[styles.flex1, styles.flexRow, styles.my3, styles.alignCenter]}
        >
          <TextInput
            style={[
              styles.bgWhite,
              styles.px4,
              styles.py2,
              styles.w33,
              styles.textRight,
            ]}
            keyboardType="number-pad"
            placeholder={"2000.00"}
            value={ratePerHourValue}
            onChangeText={(e) => setRatePerHourValue(e)}
          />
          <Text style={[styles.hp, styles.mx3, styles.textCenter]}>
            Philippine Peso (PHP)
          </Text>
        </View>
        <View>
          <Text style={[styles.h3, styles.bold, styles.mt5]}>Sample Works</Text>
          {!uploadingImage && (
            <TouchableOpacity style={[styles.my2]} onPress={pickImage}>
              <Text
                style={[
                  styles.bgWhite,
                  styles.h3,
                  styles.my2,
                  styles.p5,
                  styles.textCenter,
                  styles.rounded,
                ]}
              >
                Click Here to Add Photos
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {uploadingImage ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : null}
        {sampleWorkImg.length === 0 ? (
          <Text style={[styles.textCenter, styles.bold, styles.textSecondary]}>
            No images uploaded
          </Text>
        ) : (
          sampleWorkImg.map((imgName) => {
            return (
              <AttachImage
                title={imgName}
                key={imgName}
                onRemove={() => handleRemoveSampleWorkImg(imgName)}
              />
            );
          })
        )}

        <Text style={[styles.h3, styles.bold, styles.mt5]}>Certificates</Text>
        {!uploadingCertificate && (
          <TouchableOpacity style={[styles.my2]} onPress={pickCertificate}>
            <Text
              style={[
                styles.bgWhite,
                styles.h3,
                styles.my2,
                styles.p5,
                styles.textCenter,
                styles.rounded,
              ]}
            >
              Click Here to Add Photos
            </Text>
          </TouchableOpacity>
        )}

        {uploadingCertificate ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : null}
        {certificateImg.length === 0 ? (
          <Text style={[styles.textCenter, styles.bold, styles.textSecondary]}>
            No images uploaded
          </Text>
        ) : (
          certificateImg.map((imgName) => {
            return (
              <AttachImage
                title={imgName}
                key={imgName}
                onRemove={() => handleRemoveCertificate(imgName)}
              />
            );
          })
        )}

        <View style={[styles.my3, styles.pt5]}>
          {errMessage && (
            <Text style={[styles.textCenter, styles.textDanger, styles.bold]}>
              Error Incomplete Data
            </Text>
          )}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : null}
        <View style={[styles.mx5, styles.px5]}>
          <Button title={"Submit"} onPress={handleSubmit} />
        </View>
        <View style={[styles.my5]}></View>
      </View>
    </ScrollView>
  );
};

export default AddService;
