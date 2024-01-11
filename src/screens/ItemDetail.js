import { StyleSheet, Text, View , Image, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const ItemDetail = ({route}) => {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.shop.value.productSelected)
  const images = product.images ? product.images : []



  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow} onPress={()=>dispatch(addItem(product))}>
              <Text style={styles.buyNowText}>Carrito</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.pink,
    paddingBottom: 120

  },
  content: {
    width: "100%"
  },

  image: {
    width: "100%",
    height: 300
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft:19
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  description: {
    fontFamily: "Josefin",
    fontSize: 17
  },
  price: {
    fontSize: 50,
    fontFamily: "Lobster"
  },
  buyNow: {
    width: "auto",
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowOpacity: "1",
    shadowOffset: ""
  },
  buyNowText: {
    color: colors.blue,
    fontSize: 35,
    fontFamily: "Lobster"
  }

})