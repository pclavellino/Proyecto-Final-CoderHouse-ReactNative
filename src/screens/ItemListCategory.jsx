import { FlatList, Pressable, View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import products from "../../src/data/products.json";
import colors from "../global/colors";


const ItemListCategory = ({categorySelected, setCategorySelected}) => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if (categorySelected) {
            const productSelected = products.filter((item) => item.category === categorySelected)
            const productFiltered = productSelected.filter((item) => item.title.includes(keyword))
            setSelectedProducts(productFiltered)
        } else {
            const productFiltered = products.filter((item) => item.title.includes(keyword))
            setSelectedProducts(productFiltered)
        }
    }, [categorySelected, keyword])
    
    return (

        <View style={styles.container}>
            <Header/>
            <Search onSearch={setKeyword}/>
            <FlatList
                style={styles.listContainer}
                data={selectedProducts}
                renderItem={({item}) => <ProductItem product={item}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                >
            </FlatList> 
            <Pressable style={styles.button} onPress={ () => setCategorySelected(false)}>
                <Text style={styles.buttonText}>Volver</Text>
            </Pressable>
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