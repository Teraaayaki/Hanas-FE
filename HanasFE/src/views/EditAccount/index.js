import {
  ActivityIndicator,
  BackHandler,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import isEmail from "validator/es/lib/isEmail";

import Alert from "@helpers/alert";
import styles from "./style";
import { getItem } from "@helpers/asyncStorage";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import CircularProfileImage from "@components/CircularProfileImage";
import { colors } from "@constants";
import { pickImage, filterUri, createFormdata } from "@utils/imageUtils";
import {
  changeAccountInfo,
  changeSuccessState,
  changeErrorState,
} from "@redux/actions/userDetailActions";
import { showToast, ToastComponent } from "@helpers/toast";
import axios from "@helpers/axios";

const EditAccount = ({ navigation }) => {
  const { user, changeSuccess, error } = useSelector(
    (state) => state.userDetails
  );
  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [inputEmail, setInputEmail] = useState(user.email);
  const [inputProfilePic, setInputProfilePic] = useState(user.profile_pic);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedProfile, setTouchedProfile] = useState(false);

  const resetState = () => {
    setTouchedEmail(false);
    setTouchedProfile(false);
  };

  const lastProfileFilename = () => {
    const { filename } = filterUri(user.profile_pic);
    return filename;
  };

  const deleteLastProfilePicture = async (fileName) => {
    console.log("deleting last profile picture", fileName);
    try {
      await axios.delete("/api/edit/delete-profile-image", {
        headers: { Authorization: `Bearer ${token}` },
        data: { fileName },
      });
    } catch (err) {
      console.log("Error " + err.response.data.error);
    }
  };

  const uploadProfilePicture = async () => {
    // FILTER URI AND CREATE FORMDATA
    const { filename, type } = filterUri(inputProfilePic);
    const formData = createFormdata(inputProfilePic, type, filename, "profile");
    const fileName = lastProfileFilename();

    try {
      await deleteLastProfilePicture(fileName);
      const response = await fetch(
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
        // console.log(publicUrl);
        setUploadingImage(false);
        resetState();
        dispatch(changeAccountInfo(publicUrl, inputEmail));
      } else {
        // ERROR CATCHING
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
      }
    } catch (error) {
      setUploadingImage(false);
      showToast("error", error.toString(), "Please try again.");
    }
  };

  const handleChangeEmail = (e) => {
    setTouchedEmail(true);
    setInputEmail(e);
  };

  const handleInputProfilePic = async () => {
    setTouchedProfile(true);
    let result = await pickImage();
    if (!result.cancelled) {
      setInputProfilePic(result.uri);
    }
  };

  const handleRemovePic = () => {
    setTouchedProfile(true);
    setInputProfilePic("none");
  };

  const handleSubmit = async () => {
    if (!touchedEmail && !touchedProfile) {
      // console.log("No changes", touchedEmail, touchedProfile);
      // showToast("error", "No data changed", "Please try again.");
      return;
    }

    if (!isEmail(inputEmail)) {
      // console.log("invalid Email");
      showToast("error", "Invalid Email", "Please try again.");
      return;
    }

    setUploadingImage(true);
    console.log("Editing account");

    // CHECK IF PROFILE PIC IS NOT NONE

    if (inputProfilePic !== "none") {
      uploadProfilePicture();
    } else {
      // PROFILE PIC IS REMOVED NEEDS DELETION OF LAST PROFILE
      if (user.profile_pic !== "none") {
        console.log("User removed profile pic");
        const fileName = lastProfileFilename();
        (async () => await deleteLastProfilePicture(fileName))();
        resetState();
        setUploadingImage(false);
        dispatch(changeAccountInfo(inputProfilePic, inputEmail));
      } else {
        // LAST PROFILE PIC IS NONE NO UPLOADING NEEDED
        console.log("User has no profile pic");
        resetState();
        setUploadingImage(false);
        dispatch(changeAccountInfo(inputProfilePic, inputEmail));
      }
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
    const backAction = () => {
      Alert(
        "Hold on!",
        "You have unsaved changes. Are you sure you want to go back?",
        "Cancel",
        "YES",
        () => null,
        () => navigation.navigate(prevPage)
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [prevPage]);

  // HANDLE PERMISSIONS AND GET TOKEN
  useEffect(() => {
    (async () => {
      const fetchedToken = await getItem("token");
      setToken(fetchedToken);
    })();
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

  // HANDLES SUCCESS
  useEffect(() => {
    if (changeSuccess) {
      showToast(
        "success",
        "Successfully updated account info",
        "You will be redirected automatically in 4 seconds",
        () => {
          dispatch(changeSuccessState(false));
          navigation.navigate(prevPage);
        }
      );
    }
  }, [changeSuccess]);

  // HANDLES ERROR
  useEffect(() => {
    if (error !== undefined) {
      showToast("error", error, "Please try again.", () => {
        dispatch(changeErrorState());
      });
    }
  }, [error]);

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
            {inputProfilePic !== "none" && (
              <TouchableOpacity onPress={handleRemovePic}>
                <Text style={[styles.h4, styles.textDanger]}>Remove Photo</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.my5, styles.py5]}>
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
            {uploadingImage && (
              <View style={styles.my1}>
                <ActivityIndicator size="large" color={colors.secondary} />
              </View>
            )}
            <Button title="Confirm" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ToastComponent />
    </View>
  );
};

export default EditAccount;
