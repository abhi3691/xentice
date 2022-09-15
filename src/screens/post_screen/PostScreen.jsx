import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/header/Header'
import styles from './PostScreenStyle'
import ProgressContainer from '../../components/organization/progress_container/ProgressContainer'

const PostScreen = () => {
  return (
    <View style={styles.container}>
    <Header  source={{
          uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        }} />

        <ProgressContainer
        
        />
    </View>
  )
}

export default PostScreen