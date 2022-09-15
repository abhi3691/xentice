import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import SinglePost from "../../molecules/single_post/SinglePost";
import styles from "./PostGroupWiseStyle";

const PostGroupWise = ({
  propertyType,
  location,
  details,
  priceRange,
  images,
  liked,
  changeLike,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{propertyType.name}</Text>
      <View style={styles.seeeAllContainer}>
        <TouchableHighlight underlayColor="transParent">
          <Text style={styles.seeeAllText}>See all</Text>
        </TouchableHighlight>
      </View>
      <SinglePost
        details={details}
        images={images}
        location={location}
        priceRange={priceRange}
        propertyType={propertyType}
        changeLike={changeLike}
        liked={liked}
      />
    </View>
  );
};

export default PostGroupWise;
