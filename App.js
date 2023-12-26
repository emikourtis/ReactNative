import { StyleSheet } from 'react-native'
import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import TabNavigator from './src/navigation/TabNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {


  const [fontLoaded] = useFonts({
    Josefin: require("./assets/Fonts/JosefinSans-Bold.ttf"),
    Lobster: require("./assets/Fonts/Lobster-Regular.ttf")
  })

  if (!fontLoaded) return null


  return (
    <>
      <StatusBar
      />
      <Provider store={store}>
        <TabNavigator />
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
