import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./FilterButtonsStyle";
import SwitchSelector from "react-native-switch-selector";
import CustomColors from "../../../theme/Color";
const FilterButtons = ({getLabel}) => {
  const [active, setActive] = React.useState(false);

  //setActive Function

  const setActiveFuncion = (label) => {
    setActive(!active);
    getLabel(label)
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => setActiveFuncion("Property")}
        style={[styles.buttonContainer,active && styles.borderCodainer]}
      >
        <Text
          style={[
            styles.label,
            { color: active ? CustomColors.black : CustomColors.borderGray },
          ]}
        >
          Property
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={[styles.buttonContainer,!active && styles.borderCodainer]}
        onPress={() => setActiveFuncion("Service")}
      >
        <Text
          style={[
            styles.label,
            { color: !active ? CustomColors.black : CustomColors.borderGray },
          ]}
        >
          Service
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default FilterButtons;
