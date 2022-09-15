import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/10,
        width:ScreenRatio.width-25,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:ScreenRatio.height/10,
        width:ScreenRatio.width/2
    },
    nameContaier:{
        height:ScreenRatio.height/10,
        alignItems:'center',
        justifyContent:'center',
        bottom:3
    },
    name:{
        fontSize:FontRatio(35),
        color:CustomColors.lightBlue,
        marginLeft:20,
    }
})

export default styles;