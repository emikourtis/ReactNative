import { Button, Modal, View, StyleSheet, Text } from "react-native"


const Contact = ({ modalVisible, productSelected, setModalVisible }) => {


    return <Modal
        visible={modalVisible}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>¿Quieres contactar al vendedor?</Text>
                <Text style={styles.modalText}>Producto: {productSelected.title}</Text>
                <Button title='Confirmo'  />
                <Button title='Cerrar' onPress={() => setModalVisible(false)} />
            </View>
        </View>

    </Modal>
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContent: {
        width: "80%",
        borderWidth: 2,
        padding: 10,
        gap: 10
    },
    modalText: {
        textAlign: "center",

    }
})
export default Contact