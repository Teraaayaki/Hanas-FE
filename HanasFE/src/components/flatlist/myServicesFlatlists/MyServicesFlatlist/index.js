import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "@constants";

import SampleWorksFlatlist from "@components/flatlist/myServicesFlatlists/SampleWorksFlatlist";
import CertificatesFlatlist from "@components/flatlist/myServicesFlatlists/CertificatesFlatlist";
import styles from "../style";

const MyServicesFlatlist = ({ navigation, DATA, ListHeaderComponent }) => {
  const renderItemHeader = ({ item, index }) => {
    return (
      <View style={[styles.mx4]}>
        <Text style={[styles.p, styles.textMuted50, styles.bold]}>
          Service {index + 1}
        </Text>
        <View style={[styles.flexRow, styles.alignCenter, styles.mt2]}>
          <Text
            style={[
              styles.h1,
              styles.black,
              styles.bold,
              styles.mb1,
              styles.flexGrow,
            ]}
          >
            {item.serviceNameData[0].service_type} Service
          </Text>
          <TouchableOpacity
            style={styles.ml3}
            onPressOut={() =>
              navigation.navigate("EditService", {
                service_id: item._id,
              })
            }
          >
            <View style={[styles.flex1, styles.alignCenter]}>
              <View
                style={[
                  styles.borderSecondary,
                  styles.rounded,
                  styles.h100,
                  styles.square,
                  styles.alignCenter,
                  styles.justifyContentCenter,
                ]}
              >
                <Icon
                  name="pen"
                  type="font-awesome-5"
                  color={colors.secondary}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderItemInfoCard = ({ item }) => {
    return (
      <View style={[styles.infoCard, styles.mt3, styles.mx4, styles.p4]}>
        <View style={[styles.flex1]}>
          <Text style={[styles.text10, styles.textMuted50, styles.mb1]}>
            Rate Per Hour
          </Text>
          <Text style={styles.text12}>{item.hourly_rate} PHP</Text>
        </View>
        <View style={[styles.flex5, styles.mt3]}>
          <Text style={[styles.text10, styles.textMuted50, styles.mb1]}>
            Description
          </Text>
          <Text style={[styles.text12, styles.textJustify]}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={[styles.mb5, styles.mt4]}>
        {renderItemHeader({ item, index })}
        {renderItemInfoCard({ item })}
        <SampleWorksFlatlist DATA={item.sample_works} onPressImage={() => {}} />
        <CertificatesFlatlist
          DATA={item.certificates}
          onPressImage={() => {}}
        />
      </View>
    );
  };

  const renderListFooterComponent = () => {
    return (
      <View style={styles.m5}>
        <Text style={[styles.p, styles.textMuted50, styles.bold]}>
          Service {DATA.length + 1}
        </Text>
        <View style={[styles.infoCard, styles.mt5, styles.p10]}>
          <TouchableOpacity onPress={() => navigation.navigate("AddService")}>
            <View
              style={[
                styles.addButton,
                styles.justifyContentCenter,
                styles.alignCenter,
                styles.rounded,
                styles.flexRow,
              ]}
            >
              <Icon
                name="add-circle-outline"
                type="ionicons"
                color={colors.secondary}
                size={30}
                style={styles.mr5}
              />
              <Text style={[styles.textCenter, styles.my5, styles.h2]}>
                Add Another Service
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={renderListFooterComponent}
    />
  );
};

export default MyServicesFlatlist;
