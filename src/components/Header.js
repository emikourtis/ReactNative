import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Global/colors'
import { Entypo } from "@expo/vector-icons"
import BtnHome from './BtnHome'


const Header = ({title, navigation, route}) => {

  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title} </Text>
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.orange,
    height: 110,
    width:"100%",
    paddingTop:20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection:"row"
  },
  text: {
    fontSize: 37,
    fontFamily:"Josefin",
    margin:30,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  btn:{
    margin:30
  }
})