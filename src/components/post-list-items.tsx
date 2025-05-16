import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const PostListItems = () => {
  return (
    <SafeAreaView
    className=' flex-1 px-4'
    >
      {/* can we build this ?  */}
      {/* <Image 
      source={require("~/assets/icon.png")}
      className='size-7'
      /> */}

      {/* Sigle post */}
      <View className=' flex   flex-row bg-green-500'>
 {/* can be divided into two vertical parts 
 image and texts  
 */}
 {/* Image */}
 <View className='p-4 bg-yellow-200'>
      <FontAwesome6 name="person" size={24} color="black" />
 </View>

 <View>
<Text>nomadsophie</Text>
<Text>Anyone else in Bali working on AI</Text>
 </View>


      </View>
      
   
    </SafeAreaView>
  )
}

export default PostListItems
