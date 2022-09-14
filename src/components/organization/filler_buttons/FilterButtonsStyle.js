import { StyleSheet} from 'react-native'
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
    container:{
        height:ScreenRatio.height/15,
        width:ScreenRatio.width,
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
    },

    buttonContainer:{
        height:ScreenRatio.height/25,
        width:ScreenRatio.width/4,
        alignItems:'center',
        justifyContent:'center',
    },
    label:{
        fontWeight:'bold',
        fontSize:FontRatio(13)
    },
    borderCodainer:{
        borderColor:CustomColors.borderGray,
        borderWidth:1,
        borderRadius:5,
    }
})

export default styles;