import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
container:{
    height:ScreenRatio.height/15,
    width:ScreenRatio.width,
    alignItems:'center',
    justifyContent:'center',
},
inputContainer:{
    width:ScreenRatio.width/1.1,
    height:ScreenRatio.height/18,
    borderRadius:5,
    justifyContent:'center',
    paddingHorizontal:10,
    backgroundColor:CustomColors.darkGray,
   
},
input:{
    fontSize:FontRatio(14),
    color:CustomColors.black,
    fontWeight:'bold',
    opacity:0.6
}
})

export default styles;