import { View, Text } from 'react-native'
import React from 'react'
import PostListItems from '../components/post-list-items'

const Index = () => {
  return (
    <View className='  flex-1  bg-green-300 '>
      <Text className='  text-2xl '>Hello</Text>
      <PostListItems />
    </View>
  )
}

export default Index