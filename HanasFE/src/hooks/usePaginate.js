import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import { colors } from "@constants";

const usePaginate = (data) => {
  const [paginatedData, setPaginatedData] = useState([...data]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOnEndReach = () => {
    if (limit === data.length) return;

    setLoading(true);
    setTimeout(() => {
      paginateItems(data);
      setLoading(false);
    }, 2000);
  };

  const paginateItems = (item) => {
    let slicedArray = [];
    if (limit + 10 > item.length) {
      slicedArray = item.slice(limit);
      setLimit(item.length);
    } else {
      slicedArray = item.slice(limit, limit + 10);
      setLimit(limit + 10);
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
    setLimit(10);
    return item.slice(0, 10);
  };

  useEffect(() => {
    const limitedArray = limitArray(data);
    setPaginatedData([...limitedArray]);
  }, [data]);

  return [paginatedData, handleOnEndReach, renderFooter];
};

export default usePaginate;
