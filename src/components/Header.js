import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { Entypo } from "@expo/vector-icons"

const Header = ({title, navigation, route}) => {

  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title} </Text>
      <Pressable style={styles.btn} onPress={()=>navigation.navigate("Login")} >
        <Entypo name="login" color="black" size={25} />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.orange,
    height: 130,
    width:"100%",
    paddingTop:20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection:"row"
  },
  text: {
    fontSize: 45,
    fontFamily:"Josefin",
    margin:30,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  btn:{
    margin:30
  }
})