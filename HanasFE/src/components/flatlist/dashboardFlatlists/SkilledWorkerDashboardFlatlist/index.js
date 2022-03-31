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
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import Overview from "@components/dashboardCards/Overview";
import Achievements from "@components/dashboardCards/Achievements";
import ConvenienceFee from "@components/dashboardCards/ConvenienceFee";

const SkilledWorkerDashboardFlatlist = ({}) => {
  const [hideCard, setHideCard] = useState(false);

  const renderFlatlist = ({ hideCard }) => {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
        name: "Hosea Barriga",
        timeStart: "10:00 AM",
        timeEnd: "8:30 PM",
        image: require("@images/service1.png"),
        address: "Danao City",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        name: "Soy Lebumfacil",
        timeStart: "11:00 AM",
        timeEnd: "1:30 PM",
        image: require("@images/service2.png"),
        address: "Bogo City",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        name: "James Karl Sia",
        timeStart: "8:00 AM",
        timeEnd: "1:00 PM",
        image: require("@images/service3.png"),
        address: "Talamban",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d78",
        title: "Fourth Item",
        name: "Mary Therese Sun Alegre",
        timeStart: "7:30 AM",
        timeEnd: "2:30 PM",
        image: require("@images/service4.png"),
        address: "Lapu-lapu City",
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
        <View style={[styles.flex1, styles.w100]}>
          {/* Card Body */}
          <View style={[styles.flex1, styles.w100, styles.flexRow]}>
            {/* Body Left */}
            <View
              style={[
                styles.ml3,
                styles.justifyContentCenter,
                styles.alignCenter,
              ]}
            >
              <CircularImage imageSource={item.image} />
            </View>
            {/* Body Right */}
            {renderItem({ item })}
          </View>
          {/* Card Footer */}
          <View style={[styles.flex1, styles.w100, styles.flexRow]}>
            {footerMessage()}
          </View>
        </View>
      );
    };

    const footerMessage = () => {
      const renderServiceEnd = () => {
        return "2" + " hrs " + "38" + " mins";
      };

      return (
        <View
          style={[
            styles.w100,
            styles.flex1,
            styles.borderTop,
            styles.borderMuted20,
            styles.mx5,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.pt1,
            styles.mt1,
          ]}
        >
          <Text style={[styles.h1, styles.bold, styles.textMuted50]}>
            Service ends in:{" "}
          </Text>
          <Text style={[styles.h1, styles.bold]}>{renderServiceEnd()}</Text>
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <View style={[styles.w100, styles.flex1, styles.mr5]}>
          <Text
            style={[
              styles.h2,
              styles.bold,
              styles.textCenter,
              styles.borderBottom,
              styles.borderMuted20,
              styles.mb2,
              styles.pb3,
            ]}
          >
            {item.title}
          </Text>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="alarm" type="material-community-icons" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.timeStart} - {item.timeEnd}
            </Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="person-outline" type="material-icons" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.name}
            </Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="location-sharp" type="ionicon" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.address}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        extraData={[hideCard]}
        ListHeaderComponent={
          <PinkSidedCardHeader
            title="Upcoming Services"
            hideCardBtn
            hideCard={hideCard}
            setHideCard={setHideCard}
          />
        }
        ListFooterComponent={
          <View style={[styles.flex1, styles.mb5, styles.pb5]}>
            <Overview />
            <Achievements />
            <ConvenienceFee />
          </View>
        }
      />
    );
  };

  return (
    <View style={[styles.mt3, styles.w100]}>
      {renderFlatlist({ hideCard })}
    </View>
  );
};

export default SkilledWorkerDashboardFlatlist;
