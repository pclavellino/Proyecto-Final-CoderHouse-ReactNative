import { View, Text, StyleSheet } from "react-native";
import colors from "../global/colors";

const Error = ({error}) => {
    return (
        <View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        fontSize: 26,
        textAlign: 'center',
        padding: '15%',
        paddingTop: '20%',
    }
})

export default Error;