import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../Global/colors'


const Home = ({ setCategorySelected }) => {
    return (
        <>
            <Header title='Home' />
            <Text style={styles.text} >Select a category</Text>
            <Categories style={styles.categories} setCategorySelected={setCategorySelected} />
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    text: {
        width: "100%",
        paddingLeft:90,
        color: colors.blue,
        backgroundColor: colors.violet,
        fontFamily: "Lobster",
        fontSize: 30,
        padding: 10
    },

})