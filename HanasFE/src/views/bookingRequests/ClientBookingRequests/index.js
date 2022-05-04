import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator, useWindowDimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { colors } from "@constants";
import Header from "@components/Header";
import ClientBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/ClientBookingRequestsFlatlist";
import { SocketContext } from "../../../context/socketContext";
import { getBooking } from "@redux/actions/clientBookingActions";
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';

const filterBookingData = (bookingDataArray) => {
  let filteredArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Pending" 
    ) {
      filteredArrayData.push(bookingDataItem);
    }
  });
  return filteredArrayData;
};

const filterDeclinedData = (bookingDataArray) => {
  let filteredDeclinedArrayData = [];

  bookingDataArray.map( (bookingDataItem) => {
    if(bookingDataItem.book_status === "Declined" && bookingDataItem.isRemovedClient === false){
      filteredDeclinedArrayData.push(bookingDataItem);
    }
  });

  return filteredDeclinedArrayData;
}

const ClientBookingRequests = ({ navigation }) => {
  const { loading, bookingData } = useSelector((state) => state.clientBooking);
  const { user } = useSelector((state) => state.userDetails);
  const [filteredBookingData, setFilteredBookingData] = useState([]);
  const [filteredDeclinedBookingData, setFilteredDeclinedBookingData] = useState([]);
  const { socket } = useContext(SocketContext);
  const [updateBookingData, setUpdateBookingData] = useState(false);
  const dispatch = useDispatch();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Pending' },
    { key: 'second', title: 'Declined/Cancelled' },
  ]);


  const FirstRoute = () => (
    <View style={[styles.body]}>
      <View style={[styles.mx3, styles.flex1]}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <ClientBookingRequestsFlatlist
            navigation={navigation}
            DATA={filteredBookingData}
          />
        )}
      </View>
    </View>
  );

  const SecondRoute = () => (
    <View style={[styles.body]}>
      <View style={[styles.mx3, styles.flex1]}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <ClientBookingRequestsFlatlist
            navigation={navigation}
            DATA={filteredDeclinedBookingData}
          />
        )}
      </View>
    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: colors.secondary }}
    />
  );

  useEffect(() => {
    socket.current.on("clientBookingUpdate", ({ newData }) => {
      if (user.id === newData) {
        setUpdateBookingData(true);
      }
    });
  });

  useEffect(() => {
    if (updateBookingData) {
      dispatch(getBooking());
      setUpdateBookingData(false);
    }
  }, [updateBookingData]);

  useEffect(() => {
    let filteredArrayData = filterBookingData(bookingData);
    let filteredDeclinedArrayData = filterDeclinedData(bookingData);
    if (
      JSON.stringify(filteredBookingData) !== JSON.stringify(filteredArrayData) || JSON.stringify(filteredDeclinedBookingData) !== JSON.stringify(filteredDeclinedArrayData)
    ) {
      setFilteredBookingData([...filteredArrayData]);
      setFilteredDeclinedBookingData([...filteredDeclinedArrayData]);
    }
  }, [bookingData]);

  return (
    <View style={[styles.body]}>
      <Header
        title={
          "Booking Requests(" +
          bookingData.filter(
            (bookingData) => bookingData.book_status === "Pending"
          ).length +
          ")"
        }
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default ClientBookingRequests;
