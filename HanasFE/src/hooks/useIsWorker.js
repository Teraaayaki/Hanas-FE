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
  useEffect(() => {
    async function getToken() {
      let isWorker = JSON.parse(await getItem("is_worker"));

      if (isWorker) {
        setPrevPage("Profile");
      } else {
        setPrevPage("ProfileClient");
      }
    }

    getToken();
  }, [prevPage, setPrevPage]);

  return [prevPage, setPrevPage, handleBackButton];
};

export default useIsWorker;
