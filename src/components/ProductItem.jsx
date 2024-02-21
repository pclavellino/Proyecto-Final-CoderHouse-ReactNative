import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import colors from "../global/colors";

const ProductItem = ({product, navigation}) => {

    return (
        <View >
            <Pressable style={styles.container} onPress={() => navigation.navigate("ItemDetail", {product})} >
                <Text style={styles.title}>{product.title}</Text>
                <Image source={{uri: product.images}} style={styles.image}/>
            </Pressable>
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
        marginVertical: '2.5%',
        paddingHorizontal: '7.5%',
        paddingVertical: '5%',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Rubik',
        width: '60%',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10
    }
})

export default ProductItem;