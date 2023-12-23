import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons'

const OrderItem = ({ order }) => {
    const total = order.items
        .reduce((acc, product)=>acc + (product.price * product.quantity),0)
    return (
        <View>
            <View>
                <Text>{new Date(order.createdAd).toLocaleString()}</Text>
                <Text>total: {total} </Text>

            </View>
            <Feather name='search' size={25} color="black" />
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})