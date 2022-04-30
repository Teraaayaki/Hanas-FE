import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from "./style";

import { colors, fontSize, margin } from "@constants";
import CircularImage from '@components/CircularImage';
import TextLinkPink from '@components/TextLinkPink';
import { Icon } from "react-native-elements";


const CardContainer = ({name, profession, image, rating, jobs, rate, onPress, onPressServices, navigation}) => {

    var [isPress, setIsPress] = useState(false);

    var touchPropsServices = {
        activeOpacity: 0.8,
        underlayColor: colors.primary, // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(console.log("I SHOULD BESHOWN")),
        onShowUnderlay: () => setIsPress(console.log("I AM SHOWN")),
      };
  return (
    <View style={styles.container} >
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.6} onPress={onPress}>
            <CircularImage imageSource={image} onPress={onPress}/>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{name}</Text>
                <TouchableHighlight {...touchPropsServices}>
                    <Text style={styles.profession} onPress={onPressServices} >{profession}</Text>
                </TouchableHighlight>
                <View style={styles.detailsContainer}>
                    <Text style={[styles.fadeText, {marginLeft: "2%"}]}>Rating</Text>
                    <Text style={[styles.fadeText, {marginLeft: "4%"}]}>Jobs</Text>
                    <Text style={styles.fadeText}>Rate</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Icon
                        color="#FFD706"
                        size={18}
                        name="star"
                        /> 
                    <Text style={styles.fadeTextValues}>
                    {rating}/5
                    </Text>
                    <Text style={styles.fadeTextValues}>{jobs}</Text>
                    <Text style={styles.fadeTextValues}>{rate} Php/hr</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default CardContainer;