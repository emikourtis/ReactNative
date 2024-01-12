import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.js'
import MyProfile from '../screens/MyProfile.js'
import ImageSelector from '../screens/ImageSelector.js'



const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
      
         <Stack.Navigator
          initialRouteName='MyProfile'
          screenOptions={
              ({route})=>{
                  return {
                      header : () => <Header title={'Profile'}               />
                  }
              }
          }
      >
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="ImageSelector" component={ImageSelector} />
          
          
        </Stack.Navigator>
     
    )
  }

export default ProfileStack
