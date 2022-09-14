import { View, Text } from 'react-native'
import React from 'react'
import styles from './ButtonStyle'

const Button = ({label,color,backGroundColor,}) => {
  return (
    <View style={[styles.container,{backgroundColor:backGroundColor}]}>
      <Text style={[styles.labelStyle,{color:color}]}>{label}</Text>
    </View>
  )
}

export default Button