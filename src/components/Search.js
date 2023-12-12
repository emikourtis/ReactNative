import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../Global/colors'
import { useState } from 'react'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"



const Search = ({ setKeyWord, setCategorySelected }) => {

    
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const search = () => {
        const expression = /^(?=(?:\D*\d){0,2}\D*$)[A-Za-z0-9]+$/;
        if (expression.test(input)) {
            setError("Error")
        } else {
            setKeyWord(input)
        }

    }
    const removeItemSearch = () => {
        setInput("")
        setError("")
    }
    const handleHome = ()=>{
        setCategorySelected("")
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
                <Pressable onPress={removeItemSearch}>
                    <Entypo name="circle-with-cross" color="black" size={25} />
                </Pressable>
                <Pressable onPress={handleHome}>
                    <Ionicons name="md-home" size={24} color="black" />
                </Pressable>
            </View>

            {error ? <Text style={styles.errorInput}>{error}</Text> : null}

            
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