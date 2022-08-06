import { BackHandler } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import alert from "../helper/alert";

const useAlertBackHandler = (title, mesage, cancel, accept) => {
  const [prevPage, setPrevPage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      alert(() => navigation.navigate(prevPage), title, mesage, cancel, accept);
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
