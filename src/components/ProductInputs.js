import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const ProductInputs = ({newProductTitle, setNewProductTitle, newProductPrice, setNewProductPrice, handleAddProduct}) => {
    return (<View style={styles.Container}>
                <View style={styles.inputsContainer} >
                <TextInput style={styles.input1} placeholder='PRODUCT TE SELL' value={newProductTitle} onChangeText={(t) => setNewProductTitle(t)} />
                <TextInput style={styles.input2} placeholder='$ PRICE' value={newProductPrice} onChangeText={(t) => setNewProductPrice(t)} />
                </View>
                <View style={styles.buttonscontainer}>
                <Button title='AGREGAR FOTOS' onPress={handleAddProduct} />
                <Button title='PUBLICAR' onPress={handleAddProduct} />
                </View>
            </View>
    )
}

export default ProductInputs

const styles = StyleSheet.create({
    input1:{
        borderWidth:3,
        paddingHorizontal:15,
        paddingVertical:8,
        flex: 5,
        
      },
      input2:{
        borderWidth:3,
        paddingHorizontal:15,
        paddingVertical:8,
        flex: 2
      },
      Container:{
        width:"95%",
        justifyContent:"space-between",
        borderWidth:3,
        padding:4,
        borderRadius:10
      },
      buttonscontainer:{
        flexDirection:"row",
        
        marginTop:10
      },
      inputsContainer:{
        flexDirection:"row",
        
      }
})