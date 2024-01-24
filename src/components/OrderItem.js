import { StyleSheet, Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { colors } from '../Global/colors'

const OrderItem = ({ order }) => {
    
    return (
        <View style={styles.container} >
            <View style={styles.containerCarts}>
                <Text style={styles.text}>Date: {new Date(order.createdAd).toLocaleString()}</Text>
                <Text style={styles.text}>Total: ${order.total} </Text>
                <Feather name='search' size={25} color="white" />
            </View>
            
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        width:"90%",
        flexDirection:"row",
        gap:50,
        justifyContent:"space-between",
        margin:20,
        padding:10,
    },
    containerCarts:{
        backgroundColor:colors.blue,
        width:"100%",
        padding:15,
        gap:10,
        borderRadius:20
    },
    text:{
        fontFamily:"Josefin",
        fontSize:16,
        color:"white"
    }
})