import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { getItem } from "@helpers/asyncStorage";

const useIsWorker = () => {
  const [prevPage, setPrevPage] = useState("");
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate(prevPage);
  };

  // CHECK IF WORKER OR
  useEffect(async () => {
    const workerToken = JSON.parse(await getItem("is_worker"));

    if (workerToken) {
      setPrevPage("Profile");
    } else {
      setPrevPage("ProfileClient");
    }
  }, [prevPage, setPrevPage]);

  return [prevPage, setPrevPage, handleBackButton];
};

export default useIsWorker;
