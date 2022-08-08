import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";

import styles from "./style";
import Header from "@components/Header";
import NoDataImage from "@components/NoDataImage";
import WorkerBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/WorkerBookingRequestsFlatlist";
import { getBookingRequests } from "../../../redux/actions/workerBookingActions";

const WorkerBookingRequests = ({ navigation }) => {
  const dispatch = useDispatch();
  const { bookingRequests } = useSelector((state) => state.workerBookingRequests);

  return (
    <View style={[styles.body]}>
      <Fragment>
        <Header title={`Booking Requests (${bookingRequests?.length})`} />
        {bookingRequests?.length > 0 ? (
          <View style={[styles.mx3, styles.flex1]}>
            <WorkerBookingRequestsFlatlist DATA={bookingRequests} />
          </View>
        ) : (
          <NoDataImage refresh={true} onPress={() => dispatch(getBookingRequests())} />
        )}
      </Fragment>
    </View>
  );
};

export default WorkerBookingRequests;
