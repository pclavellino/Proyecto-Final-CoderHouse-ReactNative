import { Pressable, Text, View, StyleSheet } from "react-native";
import colors from "../global/colors";

const OrderItem = ({order}) => {

    const total = order.items.reduce((acumulador, item) => acumulador + (item.price * item.quantity), 0)

    return (
        <View style={styles.container}>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>Numero de Pedido: {order.id}</Text>
                <Text style={styles.orderText}>Fecha: {new Date(order.createdAt).toLocaleString()} </Text>
                <Text style={styles.orderText}>Monto: $ {total} </Text>
            </View>
            <View>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Detalles</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: colors.white,
        borderColor: colors.orange,
        borderRadius: 7,
        elevation: 7,
        marginHorizontal: '5%',
        marginVertical: '2%',
        paddingHorizontal: '4%',
        paddingVertical: '5%',
    },
    orderContainer: {
        width: '70%',
    },
    orderText: {
        fontSize: 16,
    },
    buttonContainer: {
        backgroundColor: colors.violet,
        borderRadius: 7,
        elevation: 7
    }, 
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: '3%',
        paddingHorizontal: '5%'
    }
})

export default OrderItem;