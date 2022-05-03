import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator, useWindowDimensions  } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import Header from "@components/Header";
import ClientScheduleFlatlist from "@components/flatlist/scheduleFlatlists/ClientScheduleFlatlist";
import styles from "./style";
import { colors } from "@constants";
import { SocketContext } from "../../../context/socketContext";
import { getBooking } from "@redux/actions/clientBookingActions";
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';

const filterBookingData = (bookingDataArray) => {
  let filteredArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Accepted" 
    ) {
      filteredArrayData.push(bookingDataItem);
    }
  });
  return filteredArrayData;
};

const filterCompletedData = (bookingDataArray) => {
  let filteredCompleteArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Finished" && bookingDataItem.isRemovedClient != true
    ) {
      filteredCompleteArrayData.push(bookingDataItem);
    }
  });
  return filteredCompleteArrayData;
}

const filterOngoingData = (bookingDataArray) => {
  let filteredOngoingArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Ongoing" 
    ) {
      filteredOngoingArrayData.push(bookingDataItem);
    }
  });
  return filteredOngoingArrayData;
}

const ClientSchedule = ({ navigation }) => {
  const { bookingData, loading } = useSelector((state) => state.clientBooking);
  const { user } = useSelector((state) => state.userDetails);
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();

  const [updateBookingData, setUpdateBookingData] = useState(false);
  const [filteredBookingData, setFilteredBookingData] = useState([]);
  const [filteredCompleteBookingData, setFilteredCompleteBookingData] = useState([]);
  const [filteredOngoingBookingData, setFilteredOngoingBookingData] = useState([]);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Accepted' },
    { key: 'second', title: 'Ongoing' },
    { key: 'third', title: 'Completed'},
  ]);

  const FirstRoute = () => (
    <FlatList
        ListFooterComponent={
          <View style={[styles.body]}>
            <View style={[styles.mx3, styles.flex1]}>
              {loading ? (
                <ActivityIndicator size="large" color={colors.secondary} />
              ) : (
                <ClientScheduleFlatlist
                  navigation={navigation}
                  DATA={filteredBookingData}
                />
              )}
              <View
                style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}
              >
                <View style={[styles.flex1]} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ClientBookingRequests")}
                >
                  <Text
                    style={[
                      styles.flex1,
                      styles.textRight,
                      styles.textSecondary,
                      styles.h3,
                      styles.bold,
                      styles.underline,
                      styles.bgBG,
                      styles.px3,
                    ]}
                  >
                    {"Booking Requests(" +
                      bookingData.filter(
                        (bookingData) => bookingData.book_status === "Pending"
                      ).length +
                      ")"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
  );
  
  const SecondRoute = () => (
    <FlatList
        ListFooterComponent={
          <View style={[styles.body]}>
            <View style={[styles.mx3, styles.flex1]}>
              {loading ? (
                <ActivityIndicator size="large" color={colors.secondary} />
              ) : (
                <ClientScheduleFlatlist
                  navigation={navigation}
                  DATA={filteredOngoingBookingData}
                />
              )}
              <View
                style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}
              >
                <View style={[styles.flex1]} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ClientBookingRequests")}
                >
                  <Text
                    style={[
                      styles.flex1,
                      styles.textRight,
                      styles.textSecondary,
                      styles.h3,
                      styles.bold,
                      styles.underline,
                      styles.bgBG,
                      styles.px3,
                    ]}
                  >
                    {"Booking Requests(" +
                      bookingData.filter(
                        (bookingData) => bookingData.book_status === "Pending"
                      ).length +
                      ")"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
  );

  const ThirdRoute = () => (
    <FlatList
        ListFooterComponent={
          <View style={[styles.body]}>
            <View style={[styles.mx3, styles.flex1]}>
              {loading ? (
                <ActivityIndicator size="large" color={colors.secondary} />
              ) : (
                <ClientScheduleFlatlist
                  navigation={navigation}
                  DATA={filteredCompleteBookingData}
                />
              )}
              <View
                style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}
              >
                <View style={[styles.flex1]} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ClientBookingRequests")}
                >
                  <Text
                    style={[
                      styles.flex1,
                      styles.textRight,
                      styles.textSecondary,
                      styles.h3,
                      styles.bold,
                      styles.underline,
                      styles.bgBG,
                      styles.px3,
                    ]}
                  >
                    {"Booking Requests(" +
                      bookingData.filter(
                        (bookingData) => bookingData.book_status === "Pending"
                      ).length +
                      ")"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: colors.secondary }}
    />
  );

  useEffect(() => {
    let filteredArrayData = filterBookingData(bookingData);
    let filteredCompleteArrayData = filterCompletedData(bookingData);
    let filteredOngoingArrayData = filterOngoingData(bookingData);
    if (
      JSON.stringify(filteredBookingData) !== JSON.stringify(filteredArrayData) || JSON.stringify(filteredCompleteBookingData) !== JSON.stringify(filteredCompleteArrayData) || JSON.stringify(filteredOngoingBookingData) !== JSON.stringify(filteredOngoingArrayData)
    ) {
      setFilteredBookingData([...filteredArrayData]);
      setFilteredCompleteBookingData([...filteredCompleteArrayData]);
      setFilteredOngoingBookingData([...filteredOngoingArrayData])
    }
  }, [bookingData]);

  useEffect(() => {
    socket.current.on("clientBookingUpdate", ({ newData }) => {
      if (user.id === newData) {
        console.log("Booking Changed");
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

  return (
    <>
      <Header title={"Schedule"} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default ClientSchedule;
