import { FlatList, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import colors from "../global/colors";

const ItemListCategory = ({navigation}) => {

    const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory)
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
            const productFiltered = productsFilteredByCategory.filter((item) => item.title.includes(keyword))
            setProducts(productFiltered)
    }, [productsFilteredByCategory, keyword])
    
    return (

        <View style={styles.container}>
            <Search onSearch={setKeyword}/>
            <FlatList
                style={styles.listContainer}
                data={products}
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