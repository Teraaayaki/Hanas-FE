import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  BackHandler,
} from "react-native";
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
import {
  pickImage as pickSampleImage,
  filterUri,
  createFormdata,
  uploadImageWithUrl,
} from "@utils/imageUtils";

const AddService = ({ navigation }) => {
  const [showVerifyGuide, setShowVerifyGuide] = useState(false);
  const [handleBackHandler, setHandleBackHandler] = useState(false);
  const [backErrorMsg, setBackErrorMsg] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingCertificate, setUploadingCertificate] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);

  const [service, setService] = useState("Choose Service");
  const [ratePerHourValue, setRatePerHourValue] = useState("");
  const [description, setDescription] = useState("");
  const [sampleWorkImg, setSampleWorkImg] = useState([]);
  const [sampleWorkImgUrl, setSampleWorkImgUrl] = useState([]);
  const [certificateImg, setCertificateImg] = useState([]);
  const [certificateImgUrl, setCertificateImgUrl] = useState([]);

  const dispatch = useDispatch();
  const { error, success, loading, serviceType, myServices } = useSelector(
    (state) => state.workerServices
  );

  const filterServices = () => {
    let filteredMyServices = myServices.map(
      (myService) => myService.serviceNameData[0].service_type
    );
    let filteredService = serviceType.filter((service) => {
      if (!filteredMyServices.includes(service.service_type)) {
        return service.service_type;
      }
    });
    // console.log(filteredService);
    setFilteredServices(filteredService);
  };

  // Upload sample work image
  const pickImage = async () => {
    setUploadingImage(true);
    let result = await pickSampleImage();

    if (result.cancelled) {
      setUploadingImage(false);
      return;
    }

    if (result) {
      try {
        const { filename, type } = filterUri(result.uri);
        const formData = createFormdata(result.uri, type, filename, "sample");
        console.log("uploading sample work picture");
        let response = await uploadImageWithUrl(
          formData,
          "api/worker/upload-image-service"
        );

        if (response.ok) {
          setHandleBackHandler(true);
          let { publicUrl } = await response.json();
          console.log(publicUrl);
          setSampleWorkImgUrl([...sampleWorkImgUrl, publicUrl]);
          setSampleWorkImg([...sampleWorkImg, filename]);
          setUploadingImage(false);
        }
      } catch (err) {
        setUploadingImage(false);
      }
    }
  };

  // Upload certificate
  const pickCertificate = async () => {
    setUploadingCertificate(true);
    let result = await pickSampleImage();

    if (!result.cancelled) {
      setUploadingCertificate(false);
      return;
    }

    if (result) {
      try {
        const { filename, type } = filterUri(result.uri);
        const formData = createFormdata(
          result.uri,
          type,
          filename,
          "certificate"
        );
        console.log("uploading work certificate");
        let response = await uploadImageWithUrl(
          formData,
          "api/worker/upload-image-certificate"
        );

        if (response.ok) {
          setHandleBackHandler(true);
          let { publicUrl } = await response.json();
          console.log(publicUrl);
          setCertificateImg([...certificateImg, filename]);
          setCertificateImgUrl([...certificateImgUrl, publicUrl]);
          setUploadingCertificate(false);
        }
      } catch (err) {
        setUploadingCertificate(false);
      }
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
    if (service === "Service Name") {
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 3000);
      return;
    }

    if (uploadingImage || uploadingCertificate) {
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 3000);
      return;
    }

    if (description !== "" && ratePerHourValue !== "") {
      setHandleBackHandler(false);
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
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setBackErrorMsg(handleBackHandler);
        return handleBackHandler;
      }
    );
    return () => backHandler.remove();
  }, [handleBackHandler]);

  useEffect(() => {
    if (sampleWorkImg.length === 0 && certificateImg.length === 0) {
      setHandleBackHandler(false);
      setBackErrorMsg(false);
    }
  }, [sampleWorkImg, certificateImg]);

  useEffect(() => {
    filterServices();
    console.log("Error (Add Service): ", error);
    console.log("Success (Add Service): ", success);
    if (success) {
      setService("Electrical");
      setRatePerHourValue("");
      setDescription("");
      setSampleWorkImg([]);
      setSampleWorkImgUrl([]);
      setCertificateImg([]);
      setCertificateImgUrl([]);
    }
  }, [error, success]);

  return (
    <ScrollView style={[styles.body]}>
      <DropdownList
        title={"Services List"}
        modalVisible={dropdownVisible}
        setModalVisible={setDropdownVisible}
        services={filteredServices}
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
          {!uploadingImage && sampleWorkImg.length < 5 ? (
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
          ) : null}
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

        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
            styles.pt5,
          ]}
        >
          <Text style={[styles.h3, styles.bold]}>Certificates</Text>
          <TouchableOpacity
            onPressOut={() => setShowVerifyGuide(!showVerifyGuide)}
          >
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={22}
              color={colors.success}
              style={[styles.mb5, styles.pb5]}
            />
          </TouchableOpacity>
        </View>
        {showVerifyGuide && (
          <Text style={[styles.p, styles.textJustify]}>
            This Service will not be public until your skills are Verified.
            Upload your Certificates to get Verified.
          </Text>
        )}
        {!uploadingCertificate && certificateImg.length < 3 && (
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
          {backErrorMsg && (
            <Text
              style={[
                styles.textDanger,
                styles.bold,
                styles.mb3,
                styles.textCenter,
              ]}
            >
              Please submit changes or Remove all images.
            </Text>
          )}
          <Button title={"Submit"} onPress={handleSubmit} />
        </View>
        <View style={[styles.my5]}></View>
      </View>
    </ScrollView>
  );
};

export default AddService;
