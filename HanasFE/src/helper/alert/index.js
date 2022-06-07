import { Alert } from "react-native";

/**
 * Alert helper function
 *
 * @param title STRING - Header of the alert card
 * @param mess STRING - Subtext of the alert card
 * @param cancel STRING - Button text for cancel
 * @param accept STRING - Button text for accept
 * @param cancelFunction CALLBACK FUNCTION - function for cancel
 * @param acceptFunction CALLBACK FUNCTION - function for accept
 */
export default (
  title,
  mess,
  cancel,
  accept,
  cancelFunction,
  acceptFunction
) => {
  Alert.alert(title, mess, [
    {
      text: cancel,
      onPress: cancelFunction,
      style: "cancel",
    },
    {
      text: accept,
      onPress: acceptFunction,
    },
  ]);
};
