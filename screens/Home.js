import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'



const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Button title='Home' onPress={()=>navigation.navigate('Home')} ></Button>
      <Button title='Api Showcase' onPress={()=>navigation.navigate('ApiShowcase')}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    height: 600,
    left: 120,
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center'
  }
})