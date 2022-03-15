import React from 'react';
import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./style";
import { colors, fontSize, margin } from "@constants";
import CircularImage from '@components/CircularImage';
import TextLinkPink from '@components/TextLinkPink';


const CardContainer = ({name, profession, image, rating, jobs, rate, onPress, navigation}) => {
  return (
    <View style={styles.container} >
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.6} onPress={onPress}>
            <CircularImage imageSource={image} onPress={onPress}/>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{profession}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.fadeText}>Rating</Text>
                    <Text style={styles.fadeText}>Jobs</Text>
                    <Text style={styles.fadeText}>Rate</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.fadeTextValues}><Image source={require("@images/star.png")} style={{height: 13, width: 13}}/> {rating}/5</Text>
                    <Text style={styles.fadeTextValues}>{jobs}</Text>
                    <Text style={styles.fadeTextValues}>{rate} Php/hr</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default CardContainer;