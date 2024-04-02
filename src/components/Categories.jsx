import { FlatList, View, StyleSheet } from "react-native";
import { useGetCategoriesQuery } from "../services/shopService";
import CategoryItem from "./CategoryItem";
import Loader from "./Loader";
import Error from "./Error";

const Categories = ({navigation}) => {

    const { data, isLoading, error } = useGetCategoriesQuery();

    if (isLoading) {
        return <Loader/>
    } 

    if (error) {
        return <Error error={error.message}/>
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={({item}) => <CategoryItem category={item} navigation={navigation}/>}
                keyExtractor={(category) => category}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})

export default Categories;