import {
  Alert,
  BackHandler,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";
import { getItem } from "@helpers/asyncStorage";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import CircularProfileImage from "@components/CircularProfileImage";

const EditAccount = ({ navigation }) => {
  const { user } = useSelector((state) => state.userDetails);
  const { address } = useSelector((state) => state.userRegister);

  const [prevPage, setPrevPage] = useState("");
  const [inputAddress, setInputAddress] = useState(user.address);
  const [inputEmail, setInputEmail] = useState(user.email);
  const [inputProfilePic, setInputProfilePic] = useState(user.profile_pic);
  const [uploadingImage, setUploadingImage] = useState(false);

  const editLocation = () => {
    navigation.navigate("SetLocation", { nextPage: "EditAccount" });
  };

  const handleChangeEmail = (e) => {
    setInputEmail(e);
  };

  const handleInputProfilePic = async () => {
    const token = await getItem("token");
    setUploadingImage(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
      // FILTER URI
      let localUri = result.uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // CREATE FORMDATA
      const formData = new FormData();
      formData.append("profile", {
        uri: result.uri,
        type: type,
        name: filename,
      });

      // NETWORK REQUEST
      if (result) {
        let response = await fetch(
          `${process.env.LOCALHOST}/api/edit/upload-profile-image`,
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
          setInputProfilePic(publicUrl);
          setUploadingImage(false);
        } else {
          console.log(await response.json());
        }
      }
    } else {
      setUploadingImage(false);
    }
  };

  // CHECK IF CLIENT OR WORKER
  useEffect(async () => {
    const isWorker = JSON.parse(await getItem("is_worker"));
    if (isWorker) {
      setPrevPage("Profile");
    } else {
      setPrevPage("ProfileClient");
    }
  }, []);

  // HANDLE BACK NAVIGATION
  useEffect(() => {
    console.log(user.id, inputAddress, inputEmail, inputProfilePic);
    const backAction = () => {
      Alert.alert(
        "Hold on!",
        "You have unsaved changes. Are you sure you want to go back?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => navigation.navigate(prevPage) },
        ]
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [prevPage]);

  // HANDLE PERMISSIONS
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

  // HANDLE ADDRESS INPUT ON SETLOCATION
  useEffect(() => {
    if (address) {
      setInputAddress(address);
    }
  }, [address]);

  return (
    <View
      style={[styles.body, styles.alignCenter, styles.justifyContentCenter]}
    >
      <KeyboardAvoidingView style={[styles.w66]}>
        <ScrollView>
          <Text
            style={[
              styles.textCenter,
              styles.h1,
              styles.bold,
              styles.mb5,
              styles.pb5,
            ]}
          >
            Edit Account Info
          </Text>
          <View style={[styles.alignCenter]}>
            <CircularProfileImage
              imageSource={inputProfilePic}
              onPress={handleInputProfilePic}
            />
          </View>

          <View style={[styles.my5, styles.py5]}>
            <Text style={[styles.bold, styles.mb3]}>Address</Text>
            <TouchableOpacity onPress={editLocation}>
              <IconField
                iconName="location-pin"
                iconType="material-community-icons"
                iconSize={25}
                editable={false}
                autoCapitalize="none"
                autoComplete={"password"}
                value={inputAddress}
              />
            </TouchableOpacity>

            <Text style={[styles.bold, styles.mt4, styles.mb3]}>Email</Text>
            <IconField
              iconName="email"
              iconType="entypo"
              iconSize={25}
              autoCapitalize="none"
              autoComplete={"password"}
              value={inputEmail}
              onChangeText={(e) => handleChangeEmail(e)}
            />
          </View>
          <View style={[styles.mt5, styles.pt5]}>
            <Button title="Confirm" onPress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditAccount;
