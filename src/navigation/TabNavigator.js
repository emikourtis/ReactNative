import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../Global/colors';
import OrdersStack from './OrdersStack';
import ShopIcon from '../components/ShopIcon';
import CartIcon from '../components/CartIcon';
import OrderIcon from '../components/OrdersIcon';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        
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
        height: 90,
        opacity:0.8
    }
})