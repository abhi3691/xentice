import { View, Text, FlatList } from "react-native";
import React from "react";
import RadioButton from "../../atom/radio_button/RadioButton";
import styles from "./RadioGroupSelectionStyle";

const RadioGroupSelection = ({ options }) => {
  const [activeIndex, setActiveIndex] = React.useState();

  const chnageIndex = (index) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
    <View style={styles.RadioContainer}>
      <RadioButton
        isActive={activeIndex === index}
        onPress={() => chnageIndex(index)}
      />
    <Text style={styles.label}>{item.label}</Text>
    </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions Type</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default RadioGroupSelection;
