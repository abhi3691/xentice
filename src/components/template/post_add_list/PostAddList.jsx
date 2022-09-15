import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import LandCardList from "../land_card_list/LandCardList";
import InputFiled from "../../molecules/input_Field/InputFiled";
import RadioGroupSelection from "../../organization/rediogroup_selection/RadioGroupSelection";
import HrInputFiled from "../../molecules/hr_input_field/HrInputFiled";
import InActiveInPutField from "../../molecules/inactive_input_field/InActiveInPutField";
import MapView from "react-native-maps";
import styles from "./PostAddListStyle";
import Button from "../../atom/button/Button";
import CustomColors from "../../../theme/Color";
const PostAddList = ({ data }) => {
  const options = [
    {
      id: 0,
      label: "sell",
    },
    {
      id: 1,
      label: "Rent",
    },
    {
      id: 2,
      label: "Lease",
    },
  ];

  const region= {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  return (
    <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <LandCardList data={data} />

      <InputFiled label="Property Title" />
      <RadioGroupSelection options={options} />
      <HrInputFiled label="Price" />
      <HrInputFiled label="Build Area" />
      <HrInputFiled label="PloatArea" />
      <HrInputFiled label="Seating Capacity" />
      <InActiveInPutField label={"India"} />
      <InputFiled label="City" />
      <InputFiled label="Locality" />
      <InputFiled label="Street" />

      <MapView
      style={styles.mapContainer}
      region={region}
      onResponderGrant={false}
      />

      <View style={styles.buttonContainer}>
        <Button label="Back" color={CustomColors.darkBlue} />
        <Button label="Continue" color={CustomColors.white} backGroundColor={CustomColors.darkBlue} />
      </View>
    </ScrollView>
  );
};

export default PostAddList;
