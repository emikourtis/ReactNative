
import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';

export default function App() {

  const [newProductTitle, setNewProductTitle] = useState("")
  const [newProductPrice, setNewProductPrice] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newProductTitle,
      price: newProductPrice
    }
    setProducts(current => [...current, newProduct])
    setNewProductTitle("")
    setNewProductPrice("")
  }
  const handleModal = (item) =>{
    setProductSelected(item)
    setModalVisible(true)
  }
  const handleDeleteProduct = () =>{
    setProducts(current => current.filter(product=>product.id!==productSelected.id))
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='product' value={newProductTitle} onChangeText={(t)=>setNewProductTitle(t)} />
        <TextInput style={styles.input} placeholder='price' value={newProductPrice} onChangeText={(t)=>setNewProductPrice(t)}/>
        <Button title='ADD' onPress={handleAddProduct} />
      </View>
      <View style={styles.listContainer} >
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={styles.cardProduct}>
              <Text style={styles.cardTitle}>{item.title} </Text>
              <Text>{item.price} $ </Text>
              <Button title='DEL' onPress={() => handleModal(item)} />
            </View>}

        />
      </View>
      <Modal
      visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalContent}>
          <Text style={styles.modalText}>Eliminar el producto</Text>
          <Text style={styles.modalText}>{productSelected.title}</Text>
          <Button title='Confirmo' onPress={handleDeleteProduct}/>
          <Button title='Cerrar' onPress={()=>setModalVisible(false)}/>
          </Text>
        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    marginTop:60
  },
  inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    width:"95%",
    justifyContent:"space-around"
  },
  input:{
    borderWidth:3,
    paddingHorizontal:15,
    paddingVertical:8,
    width:150
  },
  listContainer : {

    width:"100%"
  },
  cardProduct:{

    flexDirection:"row",
    padding:10,
    margin:10,
    justifyContent:"space-around",
    alignItems:"center",
    borderWidth:4
  },
  modalContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  modalContent:{
    width:"80%",
    borderWidth:2,
    padding:10,
    gap:10
  },
  modalText:{
    textAlign:"center",
    
  }
});

