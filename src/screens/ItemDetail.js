import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import BtnHome from '../components/BtnHome'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'


const ItemDetail = ({navigation, route}) => {
  
  const product = useSelector((state)=>state.shop.value.productSelected)
  const images = product.images ? product.images : []
  
  
  return (
    <View style={styles.container} >
      <View style={styles.Content}>
      <Image
            style={styles.image}
            source={{uri:images[1]}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow} onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
            <BtnHome navigation={navigation} route={route} />
          </View>
          
      </View>
      
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    borderRadius:10,
    backgroundColor:colors.pink,

},
Content:{
  width:"100%"
},

image:{
  width:"100%",
  height:300
},
 containerText:{
  gap:25,
  paddingHorizontal:5,
  paddingVertical:25
 },
 containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10
 },
 title:{
  fontSize:30,
  fontWeight:"bold"
 },
 description:{
  fontFamily:"Josefin",
  fontSize:17
 },
 price:{
  fontSize:50,
  fontFamily:"Lobster"
 },
 buyNow:{
  width:"auto",
  backgroundColor:colors.green,
  paddingVertical:5,
  paddingHorizontal:10,
  borderRadius:15,
  shadowOpacity:"1",
  shadowOffset:""
 },
 buyNowText:{
  color:colors.blue,
  fontSize:35,
  fontFamily:"Lobster"
}

})