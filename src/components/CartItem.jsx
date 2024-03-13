import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice";
import colors from "../global/colors";

const CartItem = ({item}) => {

    const dispatch = useDispatch()
    const onRemoveItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>Precio: $ {item.price}</Text>
                <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: item.images}} style={styles.itemImage}/>
                <Pressable onPress={onRemoveItem}>
                    <MaterialIcons name="delete" size={30} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: colors.white,
        borderColor: colors.orange,
        borderRadius: 7,
        elevation: 7,
        marginHorizontal: '5%',
        marginVertical: '2%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    textContainer: {
        width: '65%'
    },  
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '35%'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    itemPrice: {
        fontSize: 16
    },
    itemQuantity: {
        fontSize: 16
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10
    }
})

export default CartItem;