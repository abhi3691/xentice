import { View, Text } from "react-native";
import React from "react";
import { usePostAdSelect } from "../../hooks/post_ad_select/usePostAdSelect";
import LandCard from "../../components/atom/land_card/LandCard";
import CustomColors from "../../theme/Color";
import CircleAvater from "../../components/atom/avatar/CircleAvater";
import Button from "../../components/atom/button/Button";
import { TextInput } from "react-native-paper";
import InputFiled from "../../components/molecules/input_Field/InputFiled";
import HrInputFiled from "../../components/molecules/hr_input_field/HrInputFiled";
import RadioButton from "../../components/atom/radio_button/RadioButton";
import Header from "../../components/molecules/header/Header";
import SearchField from "../../components/molecules/search_field/SearchField";
import FilterButtons from "../../components/organization/filler_buttons/FilterButtons";
import PostList from "../../components/template/post_list/PostList";
import LandCardList from "../../components/template/land_card_list/LandCardList";
import styles from "./HomeScreenStyle";
const HomeScreen = () => {
  const [postadSelect] = usePostAdSelect();
  const [postData, setPostData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");


  //UseEffect
  React.useEffect(() => {
    getPostAdData();
  }, [postData]);

  //getPostAdd
  const getPostAdData = async () => {
    const res = await postadSelect();
    setPostData(res);
  };

  //changeSearchData
  const changeTextFunction = (x) => {
    setSearchQuery(x);
  };

  //getFilterLabel
  const getfilterLabel = React.useCallback((label) => {
    // console.log(label);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        source={{
          uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        }}
      />
      <SearchField
        value={searchQuery}
        onChangeText={(x) => changeTextFunction(x)}
      />
      <FilterButtons getLabel={(label) => getfilterLabel(label)} />
      {postData.length !==0 && <LandCardList data={postData} />}
      {postData.length !== 0 && <PostList data={postData} />}
    </View>
  );
};

export default HomeScreen;
