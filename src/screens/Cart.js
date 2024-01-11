import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrdersMutation } from '../app/services/shopServices';


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [triggerPostOrder] = usePostOrdersMutation()

  if (!cart || !cart.value || !cart.value.items || cart.value.total === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>El carrito está vacío</Text>
      </View>
    );
  }

  const { value: { items, total } } = cart;
  

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable onPress={() => triggerPostOrder(cart)}>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {total} </Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
    margin:20
  },
  containerText: {
    backgroundColor: 'grey',
    padding: 25,
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'black',
    fontFamily: 'Josefin',
    fontSize: 18
  }
});
