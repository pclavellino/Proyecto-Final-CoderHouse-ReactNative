import { useState } from "react";
import { View, Text, TextInput, StyleSheet  } from "react-native";
import colors from "../global/colors";

const InputForm = ({label, error, onChange, isSecure }) => {

    const [ input, setInput ] = useState("")

    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={input} onChangeText={onChangeText} secureTextEntry={isSecure}/>
            { error ? <Text style={styles.error}>{error}</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '7.5%',
        width: '100%'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.violet,
        marginBottom: '2.5%'
    },
    input: {
        fontSize: 18,
        padding: '2.5%',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: colors.violet
    },
    error: {
        color: colors.red,
        fontSize: 14,
    }
}
)

export default InputForm;