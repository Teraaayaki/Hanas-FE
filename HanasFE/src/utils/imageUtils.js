import * as ImagePicker from "expo-image-picker";
import { getItem } from "@helpers/asyncStorage";

export const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.5,
  });

  return result;
};

export const filterUri = (uri) => {
  let localUri = uri;
  let filename = localUri.split("/").pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  return { filename, type };
};

export const createFormdata = (uri, type, name, variableName) => {
  const formData = new FormData();
  formData.append(variableName, {
    uri: uri,
    type: type,
    name: name,
  });
  return formData;
};

export const createFormdataArray = (uriArray, formdataName) => {
  let formdataArray = new FormData();
  uriArray.map((uri) => {
    const { filename, type } = filterUri(uri);
    formdataArray.append(formdataName, {
      uri,
      type,
      name: filename,
    });
  });
  return formdataArray;
};

export const createFormdataArrayFromExisting = (
  existingFormdata,
  uriArray,
  formdataName
) => {
  uriArray.map((uri) => {
    const { filename, type } = filterUri(uri);
    existingFormdata.append(formdataName, {
      uri,
      type,
      name: filename,
    });
  });
  return existingFormdata;
};

// used by get verified (SW Screen)
export const uploadImage = async (formdata) => {
  let token = await getItem("token");
  return await fetch(
    `${process.env.LOCALHOST}/api/worker/create-verification-request`,
    {
      method: "POST",
      body: formdata,
      headers: {
        "content-type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const uploadImageWithUrl = async (formdata, url) => {
  let token = await getItem("token");
  return await fetch(`${process.env.LOCALHOST}/${url}`, {
    method: "POST",
    body: formdata,
    headers: {
      "content-type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};
