import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import colors from "../global/colors";
import Counter from "../components/Counter";

const ItemDetail = ({navigation, route}) => {

    const { product } = route.params; 

    return (
        <View style={styles.container}>
            <Image source={{uri: product.images}} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
            <Counter></Counter>
            <Pressable style={styles.addCart}>
                <Text style={styles.addCartText}>Agregar al Carrito</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
        padding: '5%',
        backgroundColor: colors.white,
        elevation: 7,

    },
    image: {
        width: '50%',
        height: 150,
        marginBottom: '5%'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        margin: '2.5%',
        fontFamily: 'RubikBoldItalic'
    },
    description: {
        fontSize: 18
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15
    },
    addCart: {
        backgroundColor: colors.violet,
        borderRadius: 7,
        marginTop: '5%',
        elevation: 7
    },
    addCartText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: '3%',
        paddingHorizontal: '5%'
    }
})


export default ItemDetail;