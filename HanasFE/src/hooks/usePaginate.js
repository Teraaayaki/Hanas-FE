import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from "react-native";

import { colors } from "@constants";

const usePaginate = (data, initialLimit = 10) => {
  const [paginatedData, setPaginatedData] = useState([...data]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOnEndReach = useCallback(() => {
    if (limit === data.length) {
      console.log("limit reached");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      paginateItems(data);
      setLoading(false);
    }, 2000);
  }, [paginatedData]);

  const paginateItems = (item) => {
    let slicedArray = [];

    // if limit + initialLimit is greater than item length
    if (limit + initialLimit > item.length) {
      console.log(limit, initialLimit, item.length);
      slicedArray = item.slice(limit);
      setLimit(item.length);
    } else {
      console.log(limit, initialLimit, item.length);
      slicedArray = item.slice(limit, limit + initialLimit);
      setLimit(limit + initialLimit);
    }
    setPaginatedData([...paginatedData, ...slicedArray]);
  };

  const renderFooter = () => {
    if (loading)
      return (
        <View style={{ margin: "5%" }}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      );

    return null;
  };

  const limitArray = (item) => {
    setLimit(initialLimit);
    return item.slice(0, initialLimit);
  };

  useEffect(() => {
    const limitedArray = limitArray(data);
    setPaginatedData([...limitedArray]);
  }, [data]);

  // useEffect(() => {
  //   console.log("paginatedData length", paginatedData.length);
  // }, [paginatedData]);

  return [paginatedData, handleOnEndReach, renderFooter];
};

export default usePaginate;
