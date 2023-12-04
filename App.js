
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import ModalContact from './src/components/ModalContact';
import ProductList from './src/components/ProductList';
import ProductInputs from './src/components/ProductInputs';
import ModalDelete from './src/components/ModalDelete';

export default function App() {
  const[modalDeleteVisible, setModalDeleteVisible] = useState(false)
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
  const handleDeleteProduct = (item) => {
    setProducts((current) => current.filter((product) => product.id !== item.id));
    setModalDeleteVisible(true);
    setProductSelected({}); 
  };

  return (
    <SafeAreaView style={styles.container} >
      <ProductInputs newProductTitle={newProductTitle}
       setNewProductTitle={setNewProductTitle}
        newProductPrice={newProductPrice} 
        setNewProductPrice={setNewProductPrice} 
        handleAddProduct={handleAddProduct} />
      <View style={styles.listContainer} >
        <ProductList products={products} handleModal={handleModal} handleDeleteProduct={handleDeleteProduct} />
      </View>
      <ModalContact 
      productSelected={productSelected}
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible}

      />
      <ModalDelete 
      productSelected={productSelected}
      modalDeleteVisible={modalDeleteVisible} 
      handleDeleteProduct={handleDeleteProduct}
      setModalDeleteVisible={setModalDeleteVisible}/>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    marginTop:60
  },
 
  
  listContainer : {
    alignContent:"center",
    width:"100%",
    marginTop:30
  },
  
 
});

