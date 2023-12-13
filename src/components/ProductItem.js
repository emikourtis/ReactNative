import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const ProductItem = ({item}) => {
  return (
    <View style={styles.container} >
        <Image 
        style={styles.image}
        resizeMode="cover"
        source={{uri:item.thumbnail}}
        />
      <Text style={styles.text} >{item.title} </Text>
      <Text style={styles.price} >$ {item.price} </Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor: colors.pink,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:6,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:30
    },
    image:{
        width:50,
        height:50
    },
    text:{
        fontFamily:"Josefin"
    },
    price:{
        fontSize:17
    }
})