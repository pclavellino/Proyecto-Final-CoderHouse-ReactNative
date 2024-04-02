import { FlatList, View, Text, Pressable, StyleSheet, Alert } from "react-native";
import CartItem from "../components/CartItem";
import colors from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../features/shop/cartSlice";
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {

    const cartItems = useSelector((state) => state.cartReducer.value.items)
    const total = useSelector((state) => state.cartReducer.value.total)
    const userId = useSelector((state) => state.authReducer.value.localId)
    const dispatch = useDispatch()
    const [triggerPost, result] = usePostOrderMutation()

    const confirmCart = () => {
        triggerPost({id: Math.random() ,total, cartItems, user: userId, createdAt: new Date().toLocaleString()})
        Alert.alert('ORDEN GENERADA', 'Su orden ha sido generada correctamente', [
            {text: 'CONTINUAR'},
        ]);
        dispatch(emptyCart())
    }

    const onEmptyCart = () => {  
        Alert.alert('VACIAR CARRITO', '¿Desea eliminar todos los productos del carrito?', [
            {text: 'SI', onPress: () => { dispatch(emptyCart()) }},
            {text: 'NO'}
        ]);
    }

    if (cartItems.length > 0) {
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
                <Pressable style={styles.buttonContainer} onPress={confirmCart}>
                    <Text style={styles.buttonText}>Confirmar Compra</Text>
                </Pressable>
                <Pressable style={styles.buttonContainer} onPress={onEmptyCart}>
                    <Text style={styles.buttonText}>Vaciar Carrito</Text>
                </Pressable>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.noProductText}>No hay productos en el carrito.</Text>
            </View>
        )
    }

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
        margin: '5%',
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
    }, 
    noProductText: {
        fontSize: 26,
        textAlign: 'center',
        padding: '15%',
        paddingTop: '20%'
    }
    
})

export default Cart;