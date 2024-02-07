import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../global/colors";

const CategoryItem = ({category}) => {
    return (
        <View>
            <Pressable style={styles.listItem}>
                <Text style={styles.listItemText}>{category}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.orange,
        borderRadius: 10,
        margin: 10,
    },
    listItemText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    }
})

export default CategoryItem;