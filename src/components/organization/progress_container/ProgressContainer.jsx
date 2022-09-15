import { View, Text } from 'react-native'
import React from 'react'

const ProgressContainer = ({title,progress}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{"Progress Details >"}</Text>
    </View>
  )
}

export default ProgressContainer