import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import colors from "../global/colors";


const ListAddress = ({navigation}) => {

    const { location } = useSelector((state) => state.authReducer.value)

    return (
        <View style={styles.container}>
            <Text style={styles.addressTitle}>Mi Direccion</Text>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>{location ? location.address : null}</Text>
                <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("LocationSelector") }>
                    <Text style={styles.buttonText}>Modificar</Text>
                </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginVertical: '5%',
    },
    addressTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: colors.white,
        borderColor: colors.orange,
        borderRadius: 7,
        elevation: 7,
        marginHorizontal: '5%',
        marginVertical: '2%',
        paddingHorizontal: '4%',
        paddingVertical: '5%',
    },
    addressText: {
        fontSize: 16,
        width: '60%',
        marginHorizontal: 5
    },
    buttonContainer: {
        backgroundColor: colors.violet,
        paddingVertical: 5,
        borderRadius: 7,
        elevation: 7
    }, 
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        paddingVertical: 2.5
    }
})

export default ListAddress