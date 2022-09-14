import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
container:{
    height:ScreenRatio.height/10,
    width:ScreenRatio.width,
    alignItems:'center',
    marginHorizontal:30,
    flexDirection:'row'
},
labelStyle:{
    top:5,
    position:'absolute',
    backgroundColor:CustomColors.white,
    zIndex:1,
    left:10,
    paddingHorizontal:5
},
input:{
    width:ScreenRatio.width/2,
    height:ScreenRatio.height/15,
    backgroundColor:"transparent",
    fontSize:FontRatio(14),
    borderWidth:1,
    borderColor:CustomColors.borderGray,
    borderRadius:5,
},
input2:{
    width:ScreenRatio.width/3.2,
    height:ScreenRatio.height/15,
    borderWidth:1,
    borderColor:CustomColors.borderGray,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginLeft:10,
}
})

export default styles;