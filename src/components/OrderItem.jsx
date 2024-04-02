import { Text, View, StyleSheet } from "react-native";
import colors from "../global/colors";

const OrderItem = ({order}) => {

    return (
        <View style={styles.container}>
            <View style={styles.orderContainer}>
                <Text style={styles.orderText}>Numero de Pedido: {order.id}</Text>
                <Text style={styles.orderText}>Fecha: {order.createdAt} </Text>
                <Text style={styles.orderText}>Monto: $ {order.total} </Text>
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
    }
})

export default OrderItem;