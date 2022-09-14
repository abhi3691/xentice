import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from './HrInputFieldStyle'
import CustomColors from '../../../theme/Color'

const HrInputFiled = ({label,value,onChangeText}) => {
  return (
  <View style={styles.container}>
   <View style={styles.labelStyle}>
   <Text>{label}</Text>
   </View>
     <TextInput
     value={value}
     onChangeText={onChangeText}
     outlineColor={CustomColors.borderGray}
     activeOutlineColor={CustomColors.borderGray}
     selectionColor={CustomColors.darkGray}
     style={styles.input}
     />

    <View style={styles.input2}>
      <Text>/Hr</Text>
    </View>
  </View>
  )
}

export default HrInputFiled