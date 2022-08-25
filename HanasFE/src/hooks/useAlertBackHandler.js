import { BackHandler } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import alert from "../helper/alert";

/**
 * useAlertBackHandler helper function
 * * *
 * this hook will enable pop an alert to the screen if
 * back button is triggered
 * * *
 * @param title STRING - Header of the alert card
 * @param message STRING - Subtext of the alert card
 * @param cancel STRING - Button text for cancel
 * @param accept STRING - Button text for accept
 *
 * @return prevPage - name of previous page
 * @return setPrage - sets the previous page name
 */

const useAlertBackHandler = (title, message, cancel, accept) => {
  const [prevPage, setPrevPage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      alert(
        () => navigation.navigate(prevPage),
        title,
        message,
        cancel,
        accept
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [prevPage, setPrevPage]);

  return [prevPage, setPrevPage];
};

export default useAlertBackHandler;
