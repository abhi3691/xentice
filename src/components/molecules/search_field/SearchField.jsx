import { View, Text } from 'react-native'
import React from 'react'
import styles from './SearchFieldStyles'
import { TextInput } from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/Ionicons'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import CustomColors from '../../../theme/Color'
const SearchField = ({value,onChangeText}) => {
  return (
    <View style={styles.container}>
     <View style={styles.InputContainer}>
        <Icons name="search" size={FontRatio(20)} color={CustomColors.lightGray}   />
     <TextInput style={styles.input}
      value={value}
      onChangeText={()=>onChangeText()}
      placeholder="Search"
      selectionColor={CustomColors.darkGray}
      />
     </View>
    </View>
  )
}

export default SearchField