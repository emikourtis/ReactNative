import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'

const Header = ({title = "Product"}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.orange,
    height: 80,
    width:"100%",
    paddingTop:20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontFamily:"Josefin",
    
  }
})