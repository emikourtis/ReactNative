import { Button, Modal, View, StyleSheet, Text } from "react-native"


const ModalDelete = ({ modalVisible, productSelected, setModalVisible, handleDeleteProduct  }) => {
    const confirmDeleteProduct = () => {
        handleDeleteProduct();
        setModalVisible(false);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    return <Modal
        visible={modalVisible}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>¿Quieres eliminar el producto "{productSelected.title}"?</Text>
                <Button title='Confirmo'  onPress={confirmDeleteProduct}/>
                <Button title='Cerrar' onPress={closeModal} />
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
export default ModalDelete