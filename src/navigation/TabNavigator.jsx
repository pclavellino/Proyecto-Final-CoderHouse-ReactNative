import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import OrderStack from "./OrderStack";
import colors from "../global/colors";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen name="ShopTab" component={ShopStack} options={{
                    tabBarIcon: ({focused}) => {
                        return (
                        <View style={styles.tabIconContainer}>
                            <Entypo name="shop" size={24} color={ focused ? colors.orange : "white" } />
                            <Text style={{color: focused ? colors.orange : "white"}}>Tienda</Text>
                        </View>
                        )
                    }
                }}/>
                <Tab.Screen name="CartTab" component={CartStack} options={{
                    tabBarIcon: ({focused}) => {
                        return (
                        <View style={styles.tabIconContainer}>
                            <Entypo name="shopping-cart" size={24} color={ focused ? colors.orange : "white" } />
                            <Text style={{color: focused ? colors.orange : "white"}}>Carrito</Text>
                        </View>
                        )
                    }
                }}/>
                <Tab.Screen name="OrderTab" component={OrderStack} options={{
                    tabBarIcon: ({focused}) => {
                        return (
                        <View style={styles.tabIconContainer}>
                            <FontAwesome5 name="clipboard-list" size={24} color={ focused ? colors.orange : "white" } />
                            <Text style={{color: focused ? colors.orange : "white"}}>Mis Pedidos</Text>
                        </View>
                        )
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.violet, 
        height: 60
    }, 
    tabIconContainer: {
        alignItems: 'center',
    },
})


export default TabNavigator;