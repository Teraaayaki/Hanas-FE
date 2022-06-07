import * as ImagePicker from "expo-image-picker";

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
