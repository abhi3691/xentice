import { StyleSheet } from "react-native";
import FontRatio from "../../../global_functions/font_ratio/FontRatio";
import ScreenRatio from "../../../global_functions/screen_ratio/ScreenRatio";
import CustomColors from "../../../theme/Color";

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 10,
    width: ScreenRatio.height / 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: CustomColors.borderGray,
    alignItems: "center",
    justifyContent: "center",
    margin: ScreenRatio.height / 50,
    padding: 10,
  },
  labelStyle: {
    fontSize: FontRatio(10),
    textAlign: "center",
  },
});

export default styles;
