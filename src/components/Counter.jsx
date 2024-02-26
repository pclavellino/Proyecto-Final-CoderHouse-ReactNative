import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import colors from "../global/colors";

const Counter = () => {

    const counter = useSelector((state) => state.counterReducer.value);
    const dispatch = useDispatch()

    
        return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.counter}>{counter}</Text>
            <Pressable style={styles.button} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: colors.violet,
        marginHorizontal: '10%',
        borderRadius: 7,
        elevation: 7,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: '5%',
        paddingVertical: '1.5%'
    }
})

export default Counter;

