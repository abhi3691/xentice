import { Text, View } from "react-native";
import React, { Component } from "react";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import styles from "./LandCardListStyle";
import ScreenRatio from "../../../global_functions/screen_ratio/ScreenRatio";
import LandCard from "../../atom/land_card/LandCard";

class LandCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 != r2;
      }),
      postList: [],
      activeIndex: "",
      loading: false,
    };
    this.layoutProvider = new LayoutProvider(
      (i) => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        (dim.width = ScreenRatio.width / 2), (dim.height = ScreenRatio.height);
      }
    );
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({ loading: false });
    const datas = this.props.data;
    if (datas.lenght !== 0) {
      for (let i = 0; i < datas.length; i++) {
        this.state.postList.push({
          type: "NORMAL",
          item: {
            id: datas[i].id,
            propertyType: datas[i].propertyType,
            location: datas[i].location,
            details: datas[i].details,
            priceRange: datas[i].priceRange,
            userid: datas[i].userid,
            images: datas[i].images,
            verified: datas[i].verified,
          },
        });
        if (i == datas.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              return r1 != r2;
            }).cloneWithRows(this.state.postList),
            loading: true,
          });
        }
      }
    }
  };

  rowRenderer = (type, data, index, extendedState) => {
    let {
      id,
      propertyType,
      location,
      details,
      priceRange,
      userid,
      images,
      verified,
    } = data.item;

    propertyType = JSON.parse(propertyType);

    return (
      <LandCard
        label={propertyType.name}
        isActive={this.state.activeIndex === index}
        onPress={() => this.changeSelection(index)}
      />
    );
  };

  changeSelection = (index) => {
    this.setState({ activeIndex: index });
  };
  render() {
    let { list, postList, activeIndex, loading } = this.state;
    return (
      <View style={styles.container}>
        {postList.length !== 0 && loading && (
          <RecyclerListView
            dataProvider={list}
            style={styles.container}
            layoutProvider={this.layoutProvider}
            rowRenderer={this.rowRenderer}
            isHorizontal={true}
            forceNonDeterministicRendering={true}
            showsHorizontalScrollIndicator={false}
            extendedState={{ state: activeIndex }}
          />
        )}
      </View>
    );
  }
}

export default LandCardList;
