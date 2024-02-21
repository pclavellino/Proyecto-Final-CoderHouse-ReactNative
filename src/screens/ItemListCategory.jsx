import { FlatList, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import products from "../../src/data/products.json";
import colors from "../global/colors";


const ItemListCategory = ({navigation, route}) => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    const { category } = route.params

    useEffect(() => {
        if (category) {
            const productSelected = products.filter((item) => item.category === category)
            const productFiltered = productSelected.filter((item) => item.title.includes(keyword))
            setSelectedProducts(productFiltered)
        } else {
            const productFiltered = products.filter((item) => item.title.includes(keyword))
            setSelectedProducts(productFiltered)
        }
    }, [category, keyword])
    
    return (

        <View style={styles.container}>
            <Search onSearch={setKeyword}/>
            <FlatList
                style={styles.listContainer}
                data={selectedProducts}
                renderItem={({item}) => <ProductItem product={item} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                >
            </FlatList> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    listContainer: {
        width:'75%'
    },
    button: {
        width: 100,
        backgroundColor: colors.violet,
        marginTop: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign:'center'
    }
}) 

export default ItemListCategory;