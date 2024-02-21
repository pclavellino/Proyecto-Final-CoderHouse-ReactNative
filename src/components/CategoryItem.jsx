import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../global/colors";

const CategoryItem = ({category, navigation}) => {

    return (
        <View>
            <Pressable style={styles.listItem} onPress={() => navigation.navigate("ItemListCategory", {category})}>
                <Text style={styles.listItemText}>{category}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: 250,
        backgroundColor: colors.orange,
        borderRadius: 10,
        margin: 10,
    },
    listItemText: {
        fontSize: 22,
        fontFamily: 'RubikItalic',
        textAlign: 'center',
        padding: 5,
    }
})

export default CategoryItem;