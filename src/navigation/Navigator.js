import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import ItemListCategories from '../screens/ItemListCategories.js'
import ItemDetail from '../screens/ItemDetail.js'
import Login from '../screens/Login.js'
import Header from '../components/Header.js'


const Stack = createNativeStackNavigator()


const Navigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header
                                            title={
                                        route.name === "Home" ? "Categories" :
                                        route.name === "Categories" ? route.params.category :
                                        route.name === "Login" ? "Login" :
                                        "Detail"
                                        
                    }               />
                }
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

