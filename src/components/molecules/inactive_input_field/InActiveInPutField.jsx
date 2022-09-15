import { View, Text } from 'react-native'
import React from 'react'
import styles from './InActiveInPutFieldStyle'
import CustomColors from '../../../theme/Color'

const InActiveInPutField = ({label}) => {
  return (
  <View style={styles.container}>
     <View
     style={styles.inputContainer}
     >
        <Text style={styles.input}>{label}</Text>
    </View>
  </View>
  )
}

export default InActiveInPutField