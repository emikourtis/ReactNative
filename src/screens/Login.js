import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../Global/colors'

const Login = () => {
  return (
    <View style={styles.container} >
      <View style={styles.Form} >
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder='User'/>
      <TextInput style={styles.input} placeholder='Password'/>
      <TouchableOpacity style={styles.btn} >
        <Text>Login</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        gap:20
    },
    input:{
        borderWidth:1,
        width:"80%",
        borderRadius:10,
        paddingLeft:15,
        paddingVertical:5
    },
    Form:{
        backgroundColor:colors.orange,
        width:"90%",
        paddingVertical:20,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
    },
    btn:{
        width:"80%",
        borderWidth:1,
        backgroundColor:colors.blue,
        padding:10,
        borderRadius:10
    }
})