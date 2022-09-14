import { View, Text } from 'react-native'
import React from 'react'
import styles from './HeaderStyle'
import Icons from 'react-native-vector-icons/Feather'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import CustomColors from '../../../theme/Color'
import CircleAvater from '../../atom/avatar/CircleAvater'
const Header = ({source}) => {
  return (
    <View style={styles.container}>
   <View style={styles.leftContainer}>
   <Icons name='menu' size={FontRatio(25)} color={CustomColors.darkBlue} />
   <View style={styles.nameContaier}>
    <Text style={styles.name}>xentice</Text>
    </View>
   </View>
   <CircleAvater source={source} />
    </View>
  )
}

export default Header