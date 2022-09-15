import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/header/Header'
import styles from './PostScreenStyle'
import ProgressContainer from '../../components/organization/progress_container/ProgressContainer'
import { usePostAdSelect } from '../../hooks/post_ad_select/usePostAdSelect'
import PostAddList from '../../components/template/post_add_list/PostAddList'

const PostScreen = () => {
  const [postadSelect] = usePostAdSelect();
  const [postData, setPostData] = React.useState([]);

  //UseEffect
  React.useEffect(() => {
    getPostAdData();
  }, [postData]);

  //getPostAdd
  const getPostAdData = async () => {
    const res = await postadSelect();
    setPostData(res);
  };

  return (
    <View style={styles.container}>
    <Header  source={{
          uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        }} />

        <ProgressContainer
        title="ProPerty"
        />

  {
    postData.length !== 0 &&
    <PostAddList
    data={postData}
    />
  }


    </View>
  )
}

export default PostScreen