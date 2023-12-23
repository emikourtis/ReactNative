import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../Global/colors'

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container} >
      <View style={styles.Form} >
        
        <TextInput style={styles.input} placeholder='User' />
        <TextInput style={styles.input} placeholder='Password' />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: colors.blue,
    opacity:0.9
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 10,
    margin: 10,
    fontFamily:"Josefin"
  },
  Form: {
    width: "90%",
    paddingVertical: 20,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    
  },
  btn: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText:{
    fontFamily:"Josefin",
    fontSize:20
  }
})