import { StyleSheet } from "react-native";
import ScreenRatio from "../../../global_functions/screen_ratio/ScreenRatio";

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.height / 20,
    borderRadius: ScreenRatio.height / 20,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default styles;
