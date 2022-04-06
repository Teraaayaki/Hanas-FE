import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibrary } from "react-native-image-picker";

import axios from "@helpers/axios";
import { colors } from "@constants";
import Header from "@components/Header";
import Button from "@components/Button";
import AttachImage from "@components/AttachImage";
import DropdownList from "@components/modal/DropdownList";
import { getServiceType } from "@redux/actions/serviceActions";

// ======================================
// HOW TO USE GUIDE:
// ======================================
// {modType} determines whether this function will render Add Service or Edit Service.
// Add Service: modType = true
// Edit Service: modType = false

// { modTypeParam } sets the value of {modType} betweeen true and false.
const options = {
  title: "Select Image",
  type: "library",
  options: {
    maxHeight: 1000,
    minHeight: 1500,
    mediaType: "photo",
    selectionLimit: 0,
    includeBase64: false,
  },
};

const AddEditService = ({ route, navigation }) => {
  const { modType, editName, editRatePerHour, editDescription } = route.params;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [service, setService] = useState("Electrical");
  const [ratePerHourValue, setRatePerHourValue] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { error, serviceType } = useSelector((state) => state.services);
  const pickImage = async () => {
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
            },
          }
        );
        if (response.ok) {
          let { publicUrl } = await response.json();
          console.log(publicUrl);
          setUploadingImage(false);
        }
      }
    } else {
      setUploadingImage(false);
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
    console.log("Error (Add/Edit Service): ", error);
    if (!serviceType) {
      dispatch(getServiceType());
    }
  }, [serviceType]);

  return (
    <ScrollView style={[styles.body]}>
      <DropdownList
        title={"Services List"}
        modalVisible={dropdownVisible}
        setModalVisible={setDropdownVisible}
        services={serviceType}
        setService={setService}
      />
      <Header title={modType ? "Add Service" : "Edit Service"} />
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
                <Text style={[styles.flex1]}>
                  {modType ? service : editName}
                </Text>
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
            defaultValue={ratePerHourValue.toString() + ".00"}
          />
          <Text style={[styles.hp, styles.mx3, styles.textCenter]}>
            Philippine Peso (PHP)
          </Text>
        </View>
        <View>
          <Text style={[styles.h3, styles.bold, styles.mt5]}>Sample Works</Text>
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
              Add or Drop Files Here
            </Text>
          </TouchableOpacity>
        </View>
        {uploadingImage ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : null}
        {/* Uploaded Sample Works List --- Start */}
        <AttachImage title={"102621_electricalimage1"} />
        <AttachImage title={"102621_electricalimage2"} />
        <AttachImage title={"102621_electricalimage3"} />
        <AttachImage title={"102621_electricalimage4"} />
        <AttachImage title={"102621_electricalimage5"} />
        <AttachImage title={"102621_electricalimage6"} />
        {/* Uploaded Sample Works List --- End */}

        <Text style={[styles.h3, styles.bold, styles.mt5]}>Certificates</Text>
        <TouchableOpacity style={[styles.my2]}>
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
            Add or Drop Files Here
          </Text>
        </TouchableOpacity>
        {/* Uploaded Sample Works List --- Start */}
        <AttachImage title={"102621_electricalimage1"} />
        <AttachImage title={"102621_electricalimage2"} />
        <AttachImage title={"102621_electricalimage3"} />
        {/* Uploaded Sample Works List --- End */}
        <View style={[styles.my5, styles.pt5]}></View>
        <View style={[styles.mx5, styles.px5]}>
          <Button
            title={"Submit"}
            onPress={() => navigation.navigate("MyServices")}
          />
        </View>
        <View style={[styles.my5]}></View>
      </View>
    </ScrollView>
  );
};

export default AddEditService;
