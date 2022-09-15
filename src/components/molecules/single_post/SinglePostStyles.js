import { StyleSheet } from "react-native";
import FontRatio from "../../../global_functions/font_ratio/FontRatio";
import ScreenRatio from "../../../global_functions/screen_ratio/ScreenRatio";
import CustomColors from "../../../theme/Color";
const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 5.5,
    width: ScreenRatio.width / 2.5,
    overflow: "hidden",
    borderRadius: 5,
    backgroundColor:CustomColors.white
  },
  imagestyle: {
    height: ScreenRatio.height / 9.5,
    width: ScreenRatio.width / 2.5,
  },
  likeButton:{
    height:ScreenRatio.height/35,
    width:ScreenRatio.height/35,
    borderRadius:ScreenRatio.height/35,
    backgroundColor:CustomColors.lightGray,
    position:'absolute',
    zIndex:1,
    alignItems:'center',
    justifyContent:'center',
    right:10,
    top:10
  },

  detailsContainer: {
    height: ScreenRatio.height / 13.1,
    width: ScreenRatio.width / 2.5,
    borderBottomWidth: .5,
    borderLeftWidth: .5,
    borderRightWidth: .5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: CustomColors.borderGray,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: ScreenRatio.height / 30,
    width: ScreenRatio.width / 2.5,
    paddingHorizontal: 5,
  },
  titleStyle: {
    fontSize: FontRatio(10),
    fontWeight: "500",
    color: CustomColors.black,
  },
  priceStyle: {
    color: CustomColors.darkRed,
    fontWeight: "bold",
    fontSize: FontRatio(8),
  },

  locationContainer: {
    height: ScreenRatio.height / 30,
    width: ScreenRatio.width / 3,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  addressText: {
    fontSize: FontRatio(9),
    color: CustomColors.black,
    marginLeft: 5,
  },
});

export default styles;
