import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/10,
        width:ScreenRatio.width,
       marginTop:20,
       paddingHorizontal:20,
    },
    header:{
        fontSize:FontRatio(14),
        color:CustomColors.darkGray,
    },
    RadioContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        alignItems:'center',
        height:ScreenRatio.height/15,
    },
    label:{
        fontSize:FontRatio(12),
        color:CustomColors.black
    }
})

export default styles;