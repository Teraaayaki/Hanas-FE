import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Icon } from "react-native-elements";
import TextLinkPink from "@components/TextLinkPink";
import ButtonWhite from "@components/ButtonWhite";
import CircularImage from "@components/CircularImage";
import { colors, fontSize, margin, padding } from "@constants";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "@redux/actions/authActions";

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.userLogin);

  const handleSubmit = () => {
    console.log("logging out");
    dispatch(userLogout());
  };

  useEffect(() => {
    console.log("Navigating to landing page");
    if (!success) {
      navigation.navigate("Landing");
    }
  }, [success]);
  return(
    <ParallaxScrollView
      backgroundColor = "#FF6D8F"
      contentBackgroundColor= "#FF6D8F"
      contentContainerStyle={{height: "100%"}}
      parallaxHeaderHeight={180}
      renderForeground={() => (
        <LinearGradient style={styles.header} colors={[colors.primary, colors.secondary]}>
          <View style={styles.headerText}>
            <Text style={styles.text}>Your Profile</Text>
          </View>
          <View style={styles.headContainer}>
            <CircularImage style={styles.image} imageSource={require("@images/mullet.jpg")} />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Soy Lebumfacil</Text>
              <Text style={styles.verified}>
                <Icon color="green" size={fontSize.h3} name="verified" /> Verified
              </Text>
            </View>
          </View>
        </LinearGradient>
      )}
      stickyHeaderHeight={70}
      renderStickyHeader={() => (
        <View style={{flexDirection: "row", justifyContent: "center", backgroundColor: "#FF6D8F", height: "100%"}}>
            <Text style={{color: colors.black, alignSelf: "center", fontSize: fontSize.h1, marginTop: 30}}>Soy Lebumfacil</Text>
            <Icon color="green" size={fontSize.h3} name="verified" style={{marginTop: 28, marginLeft: 5}}></Icon>
        </View>
           
      )}  
    >
      <View style={styles.parallaxContentContainer}>
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.headingText}>Account Info</Text>
          <View style={styles.hr}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.values}>Tungkil, Minglanilla, Cebu</Text>
          </View>
          <View style={styles.hrFaded}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.values}>johndoe@gmail.com</Text>
          </View>
          <View style={styles.hrFaded}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={styles.values}>09478619973</Text>
          </View>
          <View style={styles.profileInfoContainer}>
            <TextLinkPink
              title="Edit Account Info"
              onPress={() => navigation.navigate("EditAccount")}
            />
            <TextLinkPink
              title="Edit Password"
              onPress={() => navigation.navigate("EditPassword")}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
              <ButtonWhite
                title="View services"
                iconName="shopping-cart"
                onPress={() => navigation.navigate("Services")}
              />
          <View style={styles.buttonRow}>
            <View style={styles.flexedView}>
              <ButtonWhite
                title="Reviews"
                iconName="description"
                onPress={() => navigation.navigate("Reviews")}
              />
            </View>
            <View style={{flex: 1, alignItems: "center"}}>
              <ButtonWhite
                title="Transactions"
                iconName="credit-card"
                onPress={() => navigation.navigate("TransactionHistory")}
              />
            </View>
          </View>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hr}></View>
      </View>
    </ParallaxScrollView>
      
  )
}
export default Profile;