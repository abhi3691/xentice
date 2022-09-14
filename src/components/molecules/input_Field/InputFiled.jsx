import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import styles from './InputFieldStyle'
import CustomColors from '../../../theme/Color'

const InputFiled = ({label}) => {
  return (
  <View style={styles.container}>
     <TextInput
     mode='outlined'
     label={label}
     outlineColor={CustomColors.borderGray}
     activeOutlineColor={CustomColors.borderGray}
     selectionColor={CustomColors.darkGray}
     style={styles.input}
     />
  </View>
  )
}

export default InputFiled