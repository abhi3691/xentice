import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import CustomColors from '../../../theme/Color'

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/18,
        width:ScreenRatio.width/2.5,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:CustomColors.darkBlue,
        margin:10,
        borderRadius:5,
    },
    labelStyle:{
        fontSize:FontRatio(14),
        fontWeight:'bold'
    }
})

export default styles