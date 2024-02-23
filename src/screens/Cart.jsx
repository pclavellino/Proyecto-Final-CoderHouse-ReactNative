import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import allCartItems from "../data/cart.json";
import colors from "../global/colors";

const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = allCartItems.reduce((acumulador, item) => acumulador + (item.quantity * item.price), 0)
        setTotal(total)
        setCartItems(allCartItems)
    })

    return (
        <View style={styles.container}>
            <FlatList
            data={cartItems}
            renderItem={({item}) => <CartItem item={item}/>}
            keyExtractor={(cartItems) => cartItems.id}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalPrice}>Total:</Text>
                <Text style={styles.totalPrice}>$ {total}</Text>
            </View>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Vaciar Carrito</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    totalContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginHorizontal: '10%',
        marginVertical: '5%'
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: colors.violet,
        width: '50%',
        borderRadius: 7,
        elevation: 7
    }, 
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    }
    
})

export default Cart;