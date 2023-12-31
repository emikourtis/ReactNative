import { FlatList, StyleSheet } from 'react-native'
import allOrders from '../Data/orders.json'
import OrderItem from '../components/OrderItem'

const Orders = () => {
  
  return (
    <FlatList
    data={allOrders}
    keyExtractor={item=>item.id}
    renderItem={({item})=><OrderItem order={item} />}
    />
  )
}

export default Orders

const styles = StyleSheet.create({})