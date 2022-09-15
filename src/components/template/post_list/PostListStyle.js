import { StyleSheet} from 'react-native'
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        paddingHorizontal:20,
    },
    footer:{
        height:ScreenRatio.height/2
    }
})

export default styles;