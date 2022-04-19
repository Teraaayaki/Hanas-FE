import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";

import Header from "@components/Header";
import MyServicesFlatlist from "@components/flatlist/myServicesFlatlists/MyServicesFlatlist";
import { getMyServices, resetError } from "@redux/actions/workerServiceActions";
import { showToast, ToastComponent } from "@helpers/toast";

const MyServices = ({ navigation }) => {
  const dispatch = useDispatch();
  const { success, loading, myServices } = useSelector(
    (state) => state.workerServices
  );

  useEffect(() => {
    dispatch(getMyServices());
    if (success) {
      showToast(
        "success",
        "Successfully Completed Request",
        "Please review your services",
        () => {
          dispatch(resetError());
        }
      );
    }
  }, [success]);

  return (
    <View style={[styles.flex1]}>
      <MyServicesFlatlist
        navigation={navigation}
        DATA={myServices}
        ListHeaderComponent={
          <View style={[styles.mb5]}>
            <Header title="Services" />
          </View>
        }
      />
      <ToastComponent />
    </View>
  );
};

export default MyServices;
