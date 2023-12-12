import { FlatList, Pressable, StyleSheet } from 'react-native'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import allProducts from "../Data/products.json"
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'


const ItemListCategories = ({ category, setCategorySelected }) => {

  const [keyWord, setKeyWord] = useState("")
  const [products, setProduct] = useState(allProducts)

  useEffect(() => {
    if (category) {
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyWord))
      setProduct(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyWord))
      setProduct(productsFiltered)
    }
  }, [keyWord])
 

  return (
    <>
      <Header />
      <Search setKeyWord={setKeyWord} setCategorySelected={setCategorySelected} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />

    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex:1


  }
})