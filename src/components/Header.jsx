import { Image, View, Text, StyleSheet, StatusBar } from "react-native";
import Logo from "./Logo";
import cartImage from '../../assets/cart.png';
import colors from "../global/colors";

const Header = ({title}) => {
    return (
        <View>
            <View style={styles.containerTitle}>
                <Logo/>
                <Image style={styles.cart} source={cartImage}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 75,
        backgroundColor: colors.orange,
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },
    cart: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 10,
        backgroundColor: colors.violet,
        width: '100%'
    }
})