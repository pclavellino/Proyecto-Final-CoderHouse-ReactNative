import { FlatList, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import colors from "../global/colors";
import { useGetProductsByCategoryQuery } from "../services/shopService";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ItemListCategory = ({navigation}) => {

    const category = useSelector((state) => state.shopReducer.value.categorySelected)
    const { data : productsFilteredByCategory , isLoading, error} = useGetProductsByCategoryQuery(category)
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
            if (productsFilteredByCategory) {
                const productArray = Object.values(productsFilteredByCategory)
                const productFiltered = productArray.filter((item) => item.title.includes(keyword))
                setProducts(productFiltered)
            }
        }, [productsFilteredByCategory, keyword])

    if (isLoading) {
        return <Loader/>
    } 

    if (error) {
        return <Error error={error.message}/>
    }
    
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