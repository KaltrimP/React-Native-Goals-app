import { View, Text } from 'react-native'
import React from 'react'

const ShowPosts = ({author, title, description, id}) => {
  return (
    <View>
      <Text>:{author}</Text>
      <Text>:{title}</Text>
      <Text>:{description}</Text>
    </View>
  )
}

export default ShowPosts