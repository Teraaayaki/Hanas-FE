import React, { useState } from "react";
import CircularImage from "@components/CircularImage";
import {
  FlatList,
  Fragment,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";
import {
  PinkSidedCardList,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";

const SkilledWorkerDashboardFlatlist = ({}) => {
  const [hideCard, setHideCard] = useState(false);

  const renderFlatlist = ({ hideCard }) => {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
    ];

    const renderCard = ({ item }) => {
      return (
        <PinkSidedCardItem
          hideCard={hideCard}
          content={renderCardBody({ item })}
        />
      );
    };

    const renderCardBody = ({ item }) => {
      return (
        <View style={[styles.flex1, styles.w100, styles.temp1]}>
          {/* Card Body */}
          <View
            style={[styles.temp2, styles.flex1, styles.w100, styles.flexRow]}
          >
            {/* Body Left */}
            <View
              style={[
                styles.temp1,
                styles.ml3,
                styles.justifyContentCenter,
                styles.alignCenter,
              ]}
            >
              <CircularImage imageSource={require("@images/profile3.png")} />
            </View>
            {/* Body Right */}
            {renderItem({ item })}
          </View>
          {/* Card Footer */}
          <View
            style={[styles.temp6, styles.flex1, styles.w100, styles.flexRow]}
          >
            <View
              style={[
                styles.temp3,
                styles.w100,
                styles.flex1,
                styles.borderTop,
                styles.borderMuted20,
                styles.mx5,
              ]}
            >
              <Text>A</Text>
            </View>
          </View>
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <View style={[styles.temp5, styles.w100, styles.flex1, styles.mr5]}>
          <Text
            style={[
              styles.h1,
              styles.bold,
              styles.textCenter,
              styles.borderBottom,
              styles.py2,
              styles.borderMuted20,
            ]}
          >
            {item.title}
          </Text>
          <Text style={[styles.h3, styles.textCenter]}>
            <Icon name="alarm" type="material-community-icons" />A
          </Text>
          <Text style={[styles.h3, styles.textCenter]}>
            <Icon />A
          </Text>
          <Text style={[styles.h3, styles.textCenter]}>
            <Icon />A
          </Text>
        </View>
      );
    };

    return (
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        extraData={[hideCard]}
      />
    );
  };

  return (
    <View style={[styles.mt3, styles.w100]}>
      <PinkSidedCardList
        title="Upcomming Services"
        hideCardBtn
        hideCard={hideCard}
        setHideCard={setHideCard}
        content={renderFlatlist({ hideCard })}
      />
    </View>
  );
};

export default SkilledWorkerDashboardFlatlist;
