import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import Loading from "@components/Loading";
import MyServicesFlatlist from "@components/flatlist/myServicesFlatlists/MyServicesFlatlist";
import { getMyServices, resetError } from "@redux/actions/workerServiceActions";
import { showToast, ToastComponent } from "@helpers/toast";
import { loadingStyle } from "@constants";

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

  if (loading)
    return (
      <View style={[styles.flex1]}>
        <Header title="Services" />
        <View style={loadingStyle.position}>
          <Loading title="Fetching Services" />
        </View>
      </View>
    );

  return (
    <View style={[styles.flex1]}>
      <Header title="Services" />
      <MyServicesFlatlist navigation={navigation} DATA={myServices} />
      <ToastComponent />
    </View>
  );
};

export default MyServices;
