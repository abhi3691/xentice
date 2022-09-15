import { StyleSheet, Text, View } from 'react-native'
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio'
import CustomColors from '../../theme/Color'

const styles = StyleSheet.create({
    container:{
        backgroundColor: CustomColors.white,
        width:ScreenRatio.width
    }
})

export default styles