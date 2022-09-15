import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';

const styles = StyleSheet.create({
    mapContainer:{
        height:ScreenRatio.height/3,
        width:ScreenRatio.width/1.2,
        alignSelf:'center',
        margin:20
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height:ScreenRatio.height/10,
        width:ScreenRatio.width
    }
    
})

export default styles;