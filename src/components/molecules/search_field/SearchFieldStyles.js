import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import CustomColors from '../../../theme/Color';

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        height:ScreenRatio.height/15,
        width:ScreenRatio.width,
    },
    InputContainer:{
        height:ScreenRatio.height/20,
        width:ScreenRatio.width/1.1,
        borderRadius:5,
        borderWidth:.5,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:10,
        borderColor:CustomColors.borderGray
    }
})

export default styles;