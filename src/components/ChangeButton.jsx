import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../global/colors";


const ChangeButton = ({text, onPress}) => {
    
    return (
        <Pressable style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.violet,
        width: '50%',
        borderRadius: 7,
        elevation: 7,
        margin: '2.5%'
    }, 
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    }, 
})

export default ChangeButton;