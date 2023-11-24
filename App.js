
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input} placeholder='producto' />
        <Button title='AGREGAR' />
      </View>
      <View style={styles.listContainer} >
        <View style={styles.cardProduct} >
          <Text>Producto 1</Text>
          <Text>$1200</Text>
          <Button title='Eliminar'/>
        </View>
        <View style={styles.cardProduct} >
          <Text>Producto 2</Text>
          <Text>$1300</Text>
          <Button title='Eliminar'/>
        </View>
        <View style={styles.cardProduct} >
          <Text>Producto 3</Text>
          <Text>$900</Text>
          <Button title='Eliminar'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'start',
    flex: 1

  },
  inputcontainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    marginTop: 35,
    
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 350,
    flex: 3
  },
  listContainer: {
    backgroundColor:"grey",
    width:"100%",
    marginTop: 25,
    padding: 10,
    
  },
  cardProduct: {
    backgroundColor: "white",
    flexDirection:'row',
    padding: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

