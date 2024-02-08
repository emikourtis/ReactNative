import { StyleSheet } from 'react-native'
import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import { init } from './src/database'

init()
  .then(()=>console.log("db init"))
  .catch(err=>console.log(err))

const App = () => {


  const [fontLoaded] = useFonts({
    Josefin: require("./assets/Fonts/JosefinSans-Bold.ttf"),
    Lobster: require("./assets/Fonts/Lobster-Regular.ttf"),
    Honk: require("./assets/Fonts/Honk-Regular.ttf")
  })

  if (!fontLoaded) return null


  return (
    <>
      <StatusBar style="auto" backgroundColor="#fff"
      />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
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
