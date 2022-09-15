import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import CustomColors from '../../../theme/Color'

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/10,
        width:ScreenRatio.width,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:CustomColors.lightWhite,
        paddingHorizontal:20,
    }
})

export default styles