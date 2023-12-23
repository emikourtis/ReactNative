import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../Global/colors';
import { FontAwesome, Fontisto, Octicons } from '@expo/vector-icons'
import OrdersStack from './OrdersStack';
import ShopIcon from '../components/ShopIcon';
import CartIcon from '../components/CartIcon';
import OrderIcon from '../components/OrdersIcon';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: () => <ShopIcon />
                    }}
                />


                <Tab.Screen name="CartStack" component={CartStack}
                    options={{
                        tabBarIcon: () => <CartIcon/>
                }}
                />
                <Tab.Screen name="OrdersStack" component={OrdersStack}
                    options={{
                        tabBarIcon: () => <OrderIcon/>
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    }
})