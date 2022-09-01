import React, {
  useEffect,
  useState,
  useContext,
  memo,
  useCallback,
} from "react";
import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import Header from "@components/Header";
import ClientScheduleFlatlist from "@components/flatlist/scheduleFlatlists/ClientScheduleFlatlist";
import styles from "./style";
import { colors } from "@constants";
import { SocketContext } from "../../../context/socketContext";
import { getBooking } from "@redux/actions/clientBookingActions";
import { TabView, TabBar } from "react-native-tab-view";
import usePaginate from "@custom-hooks/usePaginate";
import NoDataImage from "@components/NoDataImage";

const filterBookingData = (bookingDataArray) => {
  let filteredArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (bookingDataItem.book_status === "Accepted") {
      filteredArrayData.push(bookingDataItem);
    }
  });
  return filteredArrayData;
};

const filterCompletedData = (bookingDataArray) => {
  let filteredCompleteArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Finished" &&
      !bookingDataItem.isRemovedClient
    ) {
      filteredCompleteArrayData.push(bookingDataItem);
    }
  });
  return filteredCompleteArrayData;
};

const filterOngoingData = (bookingDataArray) => {
  let filteredOngoingArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (bookingDataItem.book_status === "Ongoing") {
      filteredOngoingArrayData.push(bookingDataItem);
    }
  });
  return filteredOngoingArrayData;
};

const FirstRoute = memo(
  ({
    navigation,
    data,
    handleOnEndReachBooking,
    renderBookingFooter,
    loading,
  }) => {
    if (data.length === 0) return <NoDataImage />;

    return (
      <View style={[styles.body]}>
        {/* {console.log("ACCEPTED TAB RERENDERED")} */}
        <View style={[styles.mx3, styles.flex1]}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={colors.secondary}
              style={[styles.flex1]}
            />
          ) : (
            <ClientScheduleFlatlist
              navigation={navigation}
              DATA={data}
              renderFooter={renderBookingFooter}
              handleOnEndReach={handleOnEndReachBooking}
            />
          )}
        </View>
      </View>
    );
  }
);

const SecondRoute = memo(
  ({
    navigation,
    data,
    handleOnEndReachBooking,
    renderBookingFooter,
    loading,
  }) => {
    if (data.length === 0) return <NoDataImage />;

    return (
      <View style={[styles.body]}>
        {/* {console.log("ONGOING TAB RERENDERED")} */}
        <View style={[styles.mx3, styles.flex1]}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={colors.secondary}
              style={[styles.flex1]}
            />
          ) : (
            <ClientScheduleFlatlist
              navigation={navigation}
              DATA={data}
              renderFooter={renderBookingFooter}
              handleOnEndReach={handleOnEndReachBooking}
            />
          )}
        </View>
      </View>
    );
  }
);

const ThirdRoute = memo(
  ({
    navigation,
    data,
    handleOnEndReachBooking,
    renderBookingFooter,
    loading,
  }) => {
    if (data.length === 0) return <NoDataImage />;

    return (
      <View style={[styles.body]}>
        {/* {console.log("COMPLETED TAB RERENDERED")} */}
        <View style={[styles.mx3, styles.flex1]}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={colors.secondary}
              style={[styles.flex1]}
            />
          ) : (
            <ClientScheduleFlatlist
              navigation={navigation}
              DATA={data}
              renderFooter={renderBookingFooter}
              handleOnEndReach={handleOnEndReachBooking}
            />
          )}
        </View>
      </View>
    );
  }
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: colors.secondary }}
  />
);

const FloatingHeader = memo(({ bookingData, navigation }) => (
  <View
    style={[
      styles.flexRow,
      styles.absolute,
      styles.px5,
      styles.py3,
      styles.floatingMargin,
    ]}
  >
    {/* {console.log("Floating header")} */}
    <View style={[styles.flex1, styles.relative]} />
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
          styles.py3,
          styles.px3,
          styles.rounded,
          styles.borderMuted20,
          styles.borderSlim,
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
));

const ClientSchedule = ({ navigation }) => {
  const { bookingData, loading } = useSelector((state) => state.clientBooking);
  const { user } = useSelector((state) => state.userDetails);
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();

  const [updateBookingData, setUpdateBookingData] = useState(false);
  const [filteredBookingData, setFilteredBookingData] = useState([]);
  const [filteredCompleteBookingData, setFilteredCompleteBookingData] =
    useState([]);
  const [filteredOngoingBookingData, setFilteredOngoingBookingData] = useState(
    []
  );

  const [paginatedBookingData, handleOnEndReachBooking, renderBookingFooter] =
    usePaginate(filteredBookingData);
  const [
    paginatedCompletedBookingData,
    handleOnEndReachCompletedBooking,
    renderCompletedBookingFooter,
  ] = usePaginate(filteredCompleteBookingData);
  const [
    paginatedOngoingBookingData,
    handleOnEndReachOngoingBooking,
    renderOngoingBookingFooter,
  ] = usePaginate(filteredOngoingBookingData);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Accepted" },
    { key: "second", title: "Ongoing" },
    { key: "third", title: "Completed" },
  ]);

  const filterAllData = () => {
    let filteredArrayData = filterBookingData(bookingData);
    let filteredCompleteArrayData = filterCompletedData(bookingData);
    let filteredOngoingArrayData = filterOngoingData(bookingData);
    if (
      JSON.stringify(filteredBookingData) !==
        JSON.stringify(filteredArrayData) ||
      JSON.stringify(filteredCompleteBookingData) !==
        JSON.stringify(filteredCompleteArrayData) ||
      JSON.stringify(filteredOngoingBookingData) !==
        JSON.stringify(filteredOngoingArrayData)
    ) {
      setFilteredBookingData([...filteredArrayData]);
      setFilteredCompleteBookingData([...filteredCompleteArrayData]);
      setFilteredOngoingBookingData([...filteredOngoingArrayData]);
    }
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return (
          <FirstRoute
            data={paginatedBookingData}
            handleOnEndReachBooking={handleOnEndReachBooking}
            renderBookingFooter={renderBookingFooter}
            navigation={navigation}
            loading={loading}
          />
        );
      case "second":
        return (
          <SecondRoute
            data={paginatedOngoingBookingData}
            handleOnEndReachBooking={handleOnEndReachOngoingBooking}
            renderBookingFooter={renderOngoingBookingFooter}
            navigation={navigation}
            loading={loading}
          />
        );
      case "third":
        return (
          <ThirdRoute
            data={paginatedCompletedBookingData}
            handleOnEndReachBooking={handleOnEndReachCompletedBooking}
            renderBookingFooter={renderCompletedBookingFooter}
            navigation={navigation}
            loading={loading}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    filterAllData();
  }, [bookingData]);

  useEffect(() => {
    socket.current.on("clientBookingUpdate", ({ newData }) => {
      if (user.id === newData) {
        console.log("Booking Changed");
        setUpdateBookingData(true);
      }
    });

    return () => {
      socket.current.off("clientBookingUpdate");
    };
  });

  useEffect(() => {
    if (updateBookingData) {
      setUpdateBookingData(false);
      dispatch(getBooking());
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
      <FloatingHeader bookingData={bookingData} navigation={navigation} />
    </>
  );
};

export default ClientSchedule;
