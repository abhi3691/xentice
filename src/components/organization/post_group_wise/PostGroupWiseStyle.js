import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import CustomColors from '../../../theme/Color'

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/5,
        width:ScreenRatio.width/1.15,
        
    },
    header:{
        fontSize:FontRatio(14),
        fontWeight:'bold',
        color:CustomColors.black
    },
    seeeAllContainer:{
height:ScreenRatio.height/30,
width:ScreenRatio.width/1.15,
alignItems:'flex-end',
justifyContent:'center'
    },
    seeeAllText:{
        fontSize:FontRatio(12),
        color:CustomColors.lightGray
    }
})

export default styles