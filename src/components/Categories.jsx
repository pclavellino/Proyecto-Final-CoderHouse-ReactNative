import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import categories from "../data/categories.json";

const Categories = ({navigation}) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                style={styles.list}
                data={categories}
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