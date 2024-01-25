import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Orders = () => {
  const {data, isSuccess, isError, error,isLoading} = useGetOrdersQuery(localId)
  const localId = useSelector(state=>state.auth.value.localId)
  const [info,setInfo] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    if(isSuccess && data.lenght === 0){
      setInfo(false)
    }
    if(isSuccess && data) setLoading(false)
    if(isError && error) setErrorMessage(error.error)
  }, [isSuccess,isError, error, data])

  if(!info) return <View><Text>No tienes ordenes</Text></View>
  if(errorMessage) return <View><Text>{errorMessage}</Text></View>
  if(loading) return <View><Text>cargando...</Text></View>
  
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