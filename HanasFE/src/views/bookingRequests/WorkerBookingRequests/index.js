import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import styles from "./style";
import Header from "@components/Header";
import WorkerBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/WorkerBookingRequestsFlatlist";

import { getBookingRequests } from "../../../redux/actions/workerBookingActions";

const WorkerBookingRequests = ({ navigation }) => {
  const dispatch = useDispatch();

  const { bookingRequests } = useSelector((state) => state.workerBookingRequests);

  useEffect(() => {
    dispatch(getBookingRequests());
  }, []);

  return (
    <View style={[styles.body]}>
      <Fragment>
        <Header title={`Booking Requests (${bookingRequests?.length})`} />
        <View style={[styles.mx3, styles.flex1]}>
          <WorkerBookingRequestsFlatlist DATA={bookingRequests} />
        </View>
      </Fragment>
    </View>
  );
};

export default WorkerBookingRequests;
