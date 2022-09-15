import { View, Text } from 'react-native'
import React from 'react'
import styles from './ProgressContainerStyle'

const ProgressContainer = ({title,progress}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{"Progress Details >"}</Text>
    </View>
  )
}

export default ProgressContainer