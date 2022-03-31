import Toast from "react-native-toast-message";

export default (type, text1, text2, onHide) => {
  Toast.show({
    type,
    text1,
    text2,
    position: "bottom",
    onHide,
  });
};
