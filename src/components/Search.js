import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../Global/colors'
import { useState } from 'react'
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons"



const Search = ({ setKeyWord, navigation, route }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
  
    const search = () => {
      const expression = /^(?=(?:\D*\d){0,2}\D*$)[A-Za-z0-9]+$/;
      if (!expression.test(input)) {
        setError("Invalid password");
      } else {
        setKeyWord(input);
        setError("")
      }
    };
  
    const removeItemSearch = () => {
      setInput("");
      setError("");
    };
  
  
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
          <Pressable onPress={()=>navigation.navigate("Home")}>
            <Ionicons name="md-home" size={24} color="black" />
          </Pressable>
          {error ? <Text style={styles.errorInput}>{error}</Text> : null}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.violet,
      width: "100%",
      height: 70,
    },
    containerInput: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: 10, // Añadido para mejorar la presentación
    },
    input: {
      backgroundColor: colors.crema,
      width: "60%",
      borderWidth: 2,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      margin: 10,
    },
    errorInput: {
      color: "red",
      paddingHorizontal: 10,
    },
  });
  
  export default Search;
  