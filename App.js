import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import { useState } from 'react'
import { useFonts } from "expo-font"

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    Lobster:require("./assets/Fonts/Lobster-Regular.ttf")
  })

  if(!fontLoaded) return null

  
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
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
