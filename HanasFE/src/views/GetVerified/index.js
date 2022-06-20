import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";

import {
  pickImage,
  filterUri,
  uploadImage,
  createFormdataArray,
  createFormdataArrayFromExisting,
} from "@utils/imageUtils";
import AttachImage from "@components/AttachImage";
import Button from "@components/Button";
import styles from "./style";
import { getItem } from "@helpers/asyncStorage";

const GetVerified = ({ navigation }) => {
  const [validId, setValidId] = useState([]);
  const [validIdUri, setValidIdUri] = useState([]);
  const [clearance, setClearance] = useState([]);
  const [clearanceUri, setClearanceUri] = useState([]);

  const handleInputValidId = async () => {
    // setTouchedProfile(true);
    let result = await pickImage();
    if (!result.cancelled) {
      const { filename } = filterUri(result.uri);
      setValidId([...validId, filename]);
      setValidIdUri([...validIdUri, result.uri]);
    }
  };

  const removeValidIdItem = (itemName) => {
    // console.log(itemName);
    let filteredUriArray = validIdUri.filter((id) => !id.includes(itemName));
    let filteredArray = validId.filter((id) => id !== itemName);
    // console.log(filteredArray);
    // console.log(filteredUriArray);
    setValidId([...filteredArray]);
    setValidIdUri([...filteredUriArray]);
  };

  const handleInputClearance = async () => {
    // setTouchedProfile(true);
    let result = await pickImage();
    if (!result.cancelled) {
      const { filename } = filterUri(result.uri);
      setClearance([...clearance, filename]);
      setClearanceUri([...clearanceUri, result.uri]);
    }
  };

  const removeClearanceItem = (itemName) => {
    // console.log(itemName);
    let filteredUriArray = clearanceUri.filter((id) => !id.includes(itemName));
    let filteredArray = clearance.filter((id) => id !== itemName);
    // console.log(filteredArray);
    // console.log(filteredUriArray);
    setClearance([...filteredArray]);
    setClearanceUri([...filteredUriArray]);
  };

  const handleSubmit = async () => {
    let token = await getItem("token");
    console.log(validIdUri);
    console.log(clearanceUri);

    let validIdFormdata = createFormdataArray(validIdUri, "validId");
    let clearanceFormdata = createFormdataArrayFromExisting(
      validIdFormdata,
      clearanceUri,
      "clearance"
    );
    try {
      const response = await uploadImage(clearanceFormdata);

      if (response.ok) {
        console.log("Successfully uploaded files");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View styles={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Icon color="green" size={30} name="verified" />
            <Text style={styles.headerText}>Get Verified</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              To help keep Hanas a trusted service market place, to ensure
              safety and for you to enjoy incentives, we need you to submit a
              photo of your valid ID and NBI or Barangay Clearance.
            </Text>
            <Text style={styles.descriptionText}>
              You will receive a notification once your ID and NBI or Barangay
              Clearance has been verified.
            </Text>
            <Text style={styles.descriptionText}>
              You will then get a green verified badge
              <Icon color="green" size={14} name="verified" />
            </Text>
          </View>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text>These are the list of accepted ID's</Text>
            </View>

            <View style={styles.tableRow}>
              <Text style={styles.text}>
                UMID{"\n"}SSS{"\n"}Passport{"\n"}Driver's License{"\n"}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.text}>
                Voter's ID{"\n"}PRC ID{"\n"}Postal ID{"\n"}National ID{"\n"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={styles.label}>Valid ID</Text>
            <View style={styles.fileInputContainer}>
              {/* INPUT VALID ID */}
              <TouchableOpacity
                style={styles.regularButton}
                title="Browse"
                onPress={handleInputValidId}
              >
                <Text style={styles.browseText}>Browse</Text>
              </TouchableOpacity>
              {validId.length > 0 ? (
                <View style={styles.attachment}>
                  {validId.map((validId) => (
                    <AttachImage
                      title={validId}
                      key={validId}
                      onRemove={() => {
                        removeValidIdItem(validId);
                      }}
                    />
                  ))}
                </View>
              ) : (
                <TextInput
                  style={styles.textInput}
                  editable={false}
                  placeholder="filename.pdf"
                />
              )}
            </View>
            <Text style={styles.textLow}>
              Please make sure that ID is clear enough
            </Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>NBI or Barangay Clearance</Text>
            <View style={styles.fileInputContainer}>
              {/* INPUT CLEARANCE */}
              <TouchableOpacity
                style={styles.regularButton}
                title="Browse"
                onPress={handleInputClearance}
              >
                <Text style={styles.browseText}>Browse</Text>
              </TouchableOpacity>
              {clearance.length > 0 ? (
                <View style={styles.attachment}>
                  {clearance.map((clearance) => (
                    <AttachImage
                      title={clearance}
                      key={clearance}
                      onRemove={() => {
                        removeClearanceItem(clearance);
                      }}
                    />
                  ))}
                </View>
              ) : (
                <TextInput
                  style={styles.textInput}
                  editable={false}
                  placeholder="filename.pdf"
                />
              )}
            </View>
            <Text style={styles.textLow}>
              Please make sure that your NBI or Brgy Clearance is still valid.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="SUBMIT" onPress={handleSubmit} />
            <View style={styles.textLinkContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
              >
                <Text style={styles.textLink}>Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetVerified;
