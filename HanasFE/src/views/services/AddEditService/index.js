import React from "react";
import { View, Text, ScrollView } from "react-native";
import { colors, Icon } from "react-native-elements";
import styles from "./styles";

import Header from "@components/Header";
import Button from "@components/Button";
import AttachImage from "@components/AttachImage";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

//Containers are invisible
//Cards are visible

const AddEditService = ({ navigation }) => {
  return (
    <ScrollView style={[styles.body]}>
      <Header title="Add/Edit Service Page" />
      <View
        style={[styles.flex1, styles.mx5, styles.my5, styles.pb5, styles.px4]}
      >
        <View style={[styles.flex1, styles.flexRow]}>
          <Text style={[styles.h2, styles.my2, styles.w50]}>
            Choose a Service
          </Text>
          <View style={[styles.w50, styles.pl4]}>
            <TouchableOpacity>
              <View
                style={[
                  styles.bgWhite,
                  styles.rounded,
                  styles.border,
                  styles.borderMuted50,
                  styles.px5,
                  styles.justifyContentCenter,
                  styles.alignCenter,
                  styles.h100,
                  styles.flexRow,
                ]}
              >
                <Text style={[styles.flex1]}>Electrical</Text>
                <Icon
                  name="chevron-down-outline"
                  type="ionicon"
                  color={"#BBB"}
                  size={30}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.h4, styles.w100, styles.textJustify, styles.mt5]}>
          Help your clients get to know more about what you do by providing a
          description on your expertise and the service you offer.
        </Text>
        <Text style={[styles.h3, styles.bold, styles.mt5]}>Description</Text>
        <TextInput
          style={[styles.bgWhite, styles.mt2, styles.px4, styles.py2]}
          multiline={true}
          numberOfLines={3}
        />
        <Text style={[styles.h3, styles.bold, styles.mt5]}>Rate per Hour</Text>
        <View
          style={[styles.flex1, styles.flexRow, styles.my3, styles.alignCenter]}
        >
          <TextInput
            style={[
              styles.bgWhite,
              styles.px4,
              styles.py2,
              styles.w33,
              styles.textRight,
            ]}
            placeholder={"2000.00"}
          />
          <Text style={[styles.hp, styles.mx3, styles.textCenter]}>
            Philippine Peso (PHP)
          </Text>
        </View>
        <View>
          <Text style={[styles.h3, styles.bold, styles.mt5]}>Sample Works</Text>
          <TouchableOpacity style={[styles.my2]}>
            <Text
              style={[
                styles.bgWhite,
                styles.h3,
                styles.my2,
                styles.p5,
                styles.textCenter,
                styles.rounded,
              ]}
            >
              Add or Drop Files Here
            </Text>
          </TouchableOpacity>
        </View>
        {/* Uploaded Sample Works List --- Start */}
        <AttachImage title={"102621_electricalimage1"} />
        <AttachImage title={"102621_electricalimage2"} />
        <AttachImage title={"102621_electricalimage3"} />
        <AttachImage title={"102621_electricalimage4"} />
        <AttachImage title={"102621_electricalimage5"} />
        <AttachImage title={"102621_electricalimage6"} />
        {/* Uploaded Sample Works List --- End */}

        <Text style={[styles.h3, styles.bold, styles.mt5]}>Certificates</Text>
        <TouchableOpacity style={[styles.my2]}>
          <Text
            style={[
              styles.bgWhite,
              styles.h3,
              styles.my2,
              styles.p5,
              styles.textCenter,
              styles.rounded,
            ]}
          >
            Add or Drop Files Here
          </Text>
        </TouchableOpacity>
        {/* Uploaded Sample Works List --- Start */}
        <AttachImage title={"102621_electricalimage1"} />
        <AttachImage title={"102621_electricalimage2"} />
        <AttachImage title={"102621_electricalimage3"} />
        {/* Uploaded Sample Works List --- End */}
        <View style={[styles.my5, styles.pt5]}></View>
        <View style={[styles.mx5, styles.px5]}>
          <Button title={"Submit"} />
        </View>
        <View style={[styles.my5]}></View>
      </View>
    </ScrollView>
  );
};

export default AddEditService;
