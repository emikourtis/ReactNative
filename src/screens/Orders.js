import { FlatList, StyleSheet } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'

const Orders = () => {
  const {data, isSuccess, isError, error} = useGetOrdersQuery(localId)
  const localId = useSelector(state=>state.auth.value.localId)

  useEffect(() => {
    if(isSuccess && data){
      console.log(data)
    }
    if(isError) console.log(error)
  }, [isSuccess,isError, error, data])
  
  return (
    <FlatList
    data={data}
    keyExtractor={item=>item.id}
    renderItem={({item})=><OrderItem order={item} />}
    />
  )
}

export default Orders

const styles = StyleSheet.create({})