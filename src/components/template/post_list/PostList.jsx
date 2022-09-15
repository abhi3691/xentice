import { Text, View } from "react-native";
import React, { Component } from "react";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import styles from "./PostListStyle";
import ScreenRatio from "../../../global_functions/screen_ratio/ScreenRatio";
import PostGroupWise from "../../organization/post_group_wise/PostGroupWise";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 != r2;
      }),
      postList: [],
      extraData:{},
    };
    this.layoutProvider = new LayoutProvider(
      (i) => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => (
        (dim.width = ScreenRatio.width / 2), (dim.height = ScreenRatio.height/4)
      )
    );
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
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
            liked:false
          },
        });
        if (i == datas.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              return r1 != r2;
            }).cloneWithRows(this.state.postList),
          });
        }
      }
    }
  };

  

  rowRenderer = (type, data, index,extendedState) => {
    let {
      id,
      propertyType,
      location,
      details,
      priceRange,
      userid,
      images,
      verified,
      liked
    } = data.item;

    propertyType = JSON.parse(propertyType);
    location = JSON.parse(location);
    details = JSON.parse(details);
    priceRange = JSON.parse(priceRange);
    images = JSON.parse(images);

    return (
      <PostGroupWise
        details={details}
        images={images}
        location={location}
        priceRange={priceRange}
        propertyType={propertyType}
        liked={liked}
        changeLike={()=> this.changeLikeFunction(index)}
      />
    );
  };

  
  changeLikeFunction=(index)=>{
    this.state.postList[index].item.liked = !this.state.postList[index].item.liked
    this.setState({extraData:this.state.postList[index].item.liked})
  }

  renderFooter=()=>{
    return(
      <View style={styles.footer}/>
    )
  }

  render() {
    let { list, postList,extraData } = this.state;
    return (
      <View style={styles.container}>
        {postList.length !== 0 && (
          <RecyclerListView
            dataProvider={list}
            layoutProvider={this.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
            extendedState={{state:extraData}}
          />
        )}
      </View>
    );
  }
}

export default PostList;
