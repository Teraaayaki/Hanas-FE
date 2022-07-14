import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import MyServicesFlatlist from "@components/flatlist/myServicesFlatlists/MyServicesFlatlist";
import { getMyServices, resetError } from "@redux/actions/workerServiceActions";
import { showToast, ToastComponent } from "@helpers/toast";
import { colors } from "@constants";

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
        <View
          style={[
            styles.flex1,
            styles.justifyContentCenter,
            styles.alignCenter,
          ]}
        >
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      </View>
    );

  return (
    <View style={[styles.flex1]}>
      <MyServicesFlatlist
        navigation={navigation}
        DATA={myServices}
        ListHeaderComponent={<Header title="Services" />}
      />
      <ToastComponent />
    </View>
  );
};

export default MyServices;
