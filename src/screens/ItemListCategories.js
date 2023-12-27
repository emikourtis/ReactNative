import { FlatList, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'

const ItemListCategories = ({ navigation, route }) => {
   const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)

  const [keyWord, setKeyWord] = useState("")
  const [products, setProduct] = useState(productsFilteredByCategory)

  useEffect(() => {
    
      const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyWord))
      setProduct(productsFiltered)
    
    
  }, [keyWord, productsFilteredByCategory])
 

  return (
    <>
      
      <Search setKeyWord={setKeyWord} navigation={navigation} route={route} />
      
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
      />

    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex:1,
    paddingTop:10,
    marginBottom:120
    
  }
})