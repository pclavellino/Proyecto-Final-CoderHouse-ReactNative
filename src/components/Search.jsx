import { View, Pressable, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../global/colors";


const Search = ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('')

    const handleSearch = () => {
        if (inputValue) {
            onSearch(inputValue)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Busca tu producto aqui" style={styles.input} value={inputValue} onChangeText={setInputValue}></TextInput>
            <Pressable style={styles.button} onPress={handleSearch}>
                <FontAwesome name="search" style={styles.search} size={30} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        padding: 25,
        marginBottom: 30,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderColor: colors.violet,
        width: '80%'
    },
    button: {
        borderRadius: 10,
    },
    search: {
        color: colors.violet
    }
})

export default Search;