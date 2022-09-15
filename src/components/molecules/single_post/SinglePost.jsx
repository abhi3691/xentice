import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./SinglePostStyles";
import Icons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomColors from "../../../theme/Color";
import FontRatio from "../../../global_functions/font_ratio/FontRatio";
import { useNavigation } from "@react-navigation/native";
const SinglePost = ({
  propertyType,
  location,
  details,
  priceRange,
  images,
  liked,
  changeLike
}) => {




  //Navigaation
  const navigation = useNavigation();
  const gotToScreen = () => {
    navigation.navigate("PostScreen");
  };
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="transparent"
      onPress={() => gotToScreen()}
    >
      <View style={styles.container}>
        <Image source={{ uri: images[0] }} style={styles.imagestyle} />
        <TouchableHighlight
          onPress={() => changeLike()}
          style={styles.likeButton}
          underlayColor="transparent"
        >
          <AntDesign
            name="heart"
            color={liked ? CustomColors.lightRed : CustomColors.white}
            size={FontRatio(14)}
          />
        </TouchableHighlight>
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{details.title}</Text>
            {details.price && (
              <Text style={styles.priceStyle}>
                {"RS " + details?.price?.rate + details?.price?.type}
              </Text>
            )}
          </View>
          <View style={styles.locationContainer}>
            <Icons
              name="ios-location"
              color={CustomColors.green}
              size={FontRatio(12)}
            />
            <Text style={styles.addressText} numberOfLines={2}>
              {details.property_add}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SinglePost;
