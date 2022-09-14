import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio'
import CustomColors from '../../../theme/Color'

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/50,
        width:ScreenRatio.height/50,
        borderRadius:ScreenRatio.height/50,
        borderColor:CustomColors.darkBlue,
        borderWidth:1,
        margin:5
    }
})

export default styles