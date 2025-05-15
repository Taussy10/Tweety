import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Post from '@/components/post'
import icon from '~/assets/icon.png'

const Index = () => {
  return (
    <View>
      {/* <Text>Index</Text>
    
     
      <Image source={require("../../assets/icon.png")}/> */}
         <Image
          className=' size-14'
         source={require(icon)}/>
      <Post />
    </View>
  )
}

export default Index
