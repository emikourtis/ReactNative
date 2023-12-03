import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ProductList = ({products, handleModal, handleDeleteProduct}) => {
  return (
    <View>
      <Text style={styles.title} >MARKETPLACE</Text>
      <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={styles.cardProduct}>
              <Text style={styles.cardTitle}>{item.title} </Text>
              <Text>{item.price} $ </Text>
              <Button title='Contact' onPress={() => handleModal(item)} />
              <Button title='Borrar' onPress={()=>handleDeleteProduct(item)}/>
            </View>}

        />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 30,
        alignSelf:"center"
    },
    cardProduct:{

        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:3
      },

})