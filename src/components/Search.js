import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../Global/colors'
import { useState } from 'react'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"
import Home from '../screens/Home'


const Search = ({ setKeyWord }) => {

    const [home, setHome] = useState(false)
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const search = () => {
        const expression = /.*[0-9].*/
        if (expression.test(input)) {
            setError("no debe contener numeros")
        } else {
            setKeyWord(input)
        }

    }
    const removeItem = () => {
        setInput("")
        setError("")
    }
    const handleHome = () => {
        setHome(true)

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar producto"
                    value={input}
                    onChangeText={(t) => setInput(t)}
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" color="black" size={25} />
                </Pressable>
                <Pressable onPress={removeItem}>
                    <Entypo name="circle-with-cross" color="black" size={25} />
                </Pressable>
                <Pressable onPress={handleHome}>
                    <Ionicons name="md-home" size={24} color="black" />
                </Pressable>
            </View>

            {error ? <Text style={styles.errorInput}>{error}</Text> : null}

            {home ? <Home /> : null}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.violet,
        width: "100%"
    },
    containerInput: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    input: {
        backgroundColor: colors.crema,
        width: "60%",
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10
    },
    errorInput: {
        color: "red",
        paddingHorizontal: 10
    }
})