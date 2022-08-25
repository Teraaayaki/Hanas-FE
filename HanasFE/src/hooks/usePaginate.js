import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { colors } from "@constants";

/**
 * usePaginate hook
 *
 * this hook will paginate the data on the frontend
 * purely cosmetic no backend calls used.
 *
 * @param data array - the list of data to be paginated
 * @param initialLimit NUMBER - initialLimit of the page,
 * how many should be seen on first render
 *
 * @return values
 *
 * @paginatedData array - the paginated data
 * @handleOnEndReach function - if user reaches end of page it will trigger this function
 * @renderFooter JSX element - returns a loading indicator if there are still data left,
 * if no more data is loaded will return empty view
 */

const usePaginate = (data, initialLimit = 10) => {
  const [paginatedData, setPaginatedData] = useState(data);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOnEndReach = useCallback(() => {
    if (limit === data.length) return;

    setLoading(true);
    setTimeout(() => {
      paginateItems(data);
      setLoading(false);
    }, 2000);
  }, [paginatedData]);

  const paginateItems = (item) => {
    let slicedArray = [];

    // if limit + initialLimit is greater than item length
    // console.log(limit, item.length);
    if (limit + initialLimit > item.length) {
      slicedArray = item.slice(limit);
      setLimit(item.length);
    } else {
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

    return <View style={{ margin: "5%" }}>{/* <Text>End</Text> */}</View>;
  };

  const limitArray = (item) => {
    setLimit(initialLimit);
    return item.slice(0, initialLimit);
  };

  useEffect(() => {
    const limitedArray = limitArray(data);
    setPaginatedData([...limitedArray]);
  }, [data]);

  return [paginatedData, handleOnEndReach, renderFooter];
};

export default usePaginate;
