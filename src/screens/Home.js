import { StyleSheet, Text } from 'react-native'
import Categories from '../components/Categories'
import { colors } from '../Global/colors'


const Home = ({navigation, route}) => {
    return (
        <>
            <Categories style={styles.categories} navigation={navigation} route={route} />
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