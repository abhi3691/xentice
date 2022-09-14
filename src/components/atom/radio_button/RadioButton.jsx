import { View, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './RadioButtonStyle'
import CustomColors from '../../../theme/Color'

const RadioButton = ({isActive,onPress}) => {

  return (
    <TouchableHighlight
    underlayColor="transpartent"
    onPress={()=> onPress()}
    style={{flex:1}}
    >
        <View style={[styles.container,{backgroundColor:isActive ? CustomColors.darkBlue:CustomColors.white}]}/>
    </TouchableHighlight>
  )
}

export default RadioButton