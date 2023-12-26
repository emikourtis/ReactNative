import { FlatList, StyleSheet, View } from 'react-native'
import CategoryItem from './CategoryItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'

const Categories = ({navigation, route}) => {
  const categories = useSelector((state) => state.shop.value.categories)
  
  return (
    
      <FlatList
      navigation={navigation} route={route}
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} route={route} />}
      />
    

  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:colors.pink,
    padding:20,
    alignContent:"center",
    }
})