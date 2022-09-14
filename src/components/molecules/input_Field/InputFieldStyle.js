import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
container:{
    height:ScreenRatio.height/10,
    width:ScreenRatio.width,
    alignItems:'center',
    justifyContent:'center',
},
input:{
    width:ScreenRatio.width/1.2,
    height:ScreenRatio.height/15,
    backgroundColor:CustomColors.white,
}
})

export default styles;