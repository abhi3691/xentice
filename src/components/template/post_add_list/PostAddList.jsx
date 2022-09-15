import { View, Text, ScrollView, VirtualizedList } from "react-native";
import React from "react";
import LandCardList from "../land_card_list/LandCardList";
import InputFiled from "../../molecules/input_Field/InputFiled";
import RadioGroupSelection from "../../organization/rediogroup_selection/RadioGroupSelection";
import HrInputFiled from "../../molecules/hr_input_field/HrInputFiled";

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
  return (
    <View style={{ flexGrow: 1 }}>
      <LandCardList data={data} />

      <InputFiled label="Property Title" />
      <RadioGroupSelection options={options} />
      <HrInputFiled label="Price" />
      <HrInputFiled label="Build Area" />
      <HrInputFiled label="PloatArea" />
      <HrInputFiled label="Seating Capacity" />
    </View>
  );
};

export default PostAddList;
