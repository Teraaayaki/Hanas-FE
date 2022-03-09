import React, {useState} from "react";
import Carousel, {ParallaxImage}  from 'react-native-snap-carousel';
import { View, Text, Image, Dimensions} from "react-native";
import { colors, fontSize } from "@constants";
import styles from "./style";


const HorizontalCarousel = () => {

    const [index, setIndex] = useState(0);
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    
    const images = {
        activeIndex: index,
        carouselItems: [
        {
            image: require("@images/dashboard1.png"),
        },
        {
            image: require("@images/dashboard1.png"),
        },
        {
            image: require("@images/dashboard1.png"),
        },
        {
            image: require("@images/dashboard1.png"),
        },
      ]
    };

    const renderItems = ({item,index}) => {
        return (
          <View style={styles.renderedContainer}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
            </View>

        );
    };
       
    return (
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center", marginLeft: 15}}>
            <Carousel
            layout={"default"}
            // ref={ref => carousel = ref}
            data={images.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItems}
            onSnapToItem = { index => setIndex({index}) }
            hasParallaxImages={true} />
        </View>
      );

}

export default HorizontalCarousel;

