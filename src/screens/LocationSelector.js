import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import * as Location from 'expo-location'

const LocationSelector = () => {
    const location = useState({latitude:"", longitude:""})
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        (async()=>{
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to acces location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
        })()
      
    }, [])
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direction: </Text>
      <Image style={styles.image} source={location.latitude? {uri:""} : require("../../assets/map.jpg")}/>
      <AddButton title="Confirm location" onPress={console.log("locacion")}/>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:10,
        gap:20
    },
    text:{
        fontSize:16
    },
    image:{
        width:300,
        height:300
    }
})