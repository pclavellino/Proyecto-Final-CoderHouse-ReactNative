import { FlatList, View, StyleSheet, Text } from "react-native";
import CategoryItem from "./CategoryItem";
import categories from "../data/categories.json";
import colors from "../global/colors";


const Categories = ({setCategorySelected}) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.title}>Categorias</Text>
            <FlatList
                style={styles.list}
                data={categories}
                renderItem={({item}) => <CategoryItem category={item} setCategorySelected={setCategorySelected}/>}
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 20,
        backgroundColor: colors.violet,
        width: '100%'
    }
})

export default Categories;