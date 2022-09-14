import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./LandCardStyle";
import Icons from "react-native-vector-icons/Octicons";
import FontRatio from "../../../global_functions/font_ratio/FontRatio";
import CustomColors from "../../../theme/Color";
const LandCard = ({ label,isActive,onPress }) => {

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="transParent"
      onPress={() => onPress()}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isActive ? CustomColors.darkBlue : "transparent" },
        ]}
      >
        <Icons
          name="stack"
          color={isActive ? CustomColors.white : CustomColors.darkGray}
          size={FontRatio(30)}
        />
        <Text
          style={[
            styles.labelStyle,
            { color: isActive ? CustomColors.white : CustomColors.darkGray },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default LandCard;
