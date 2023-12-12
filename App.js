import { SafeAreaView, StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import { useState } from 'react'
import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { colors } from './src/Global/colors'

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    Lobster:require("./assets/Fonts/Lobster-Regular.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <>
    <StatusBar
      
    />
    <SafeAreaView style={styles.container}>
      {categorySelected ?
        <ItemListCategories category={categorySelected} setCategorySelected={setCategorySelected} />
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </SafeAreaView>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})
