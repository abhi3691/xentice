import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./CircleAvaterStyle";

const CircleAvater = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.container} />
    </View>
  );
};

export default CircleAvater;
