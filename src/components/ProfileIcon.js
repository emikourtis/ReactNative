import { StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons'

const ProfileIcon = () => {
  return (
    <View style={styles.container} >
       <Octicons name='list-unordered'
                            size={40}
                            color={"black"}/>
      <Text style={styles.text} >Profile</Text>
    </View>
  )
}

export default ProfileIcon

const styles = StyleSheet.create({
    container:{
        padding:5,
        margin:5,
        alignItems:"center",
        flexDirection:"column",
        gap:2,
        paddingTop:20
    },
    text:{
        fontFamily:"Josefin",
        paddingTop:5,
        fontSize:16
    }
})