import { Image, View, StyleSheet } from "react-native";
import Logo from "./Logo";
import cartImage from '../../assets/cart.png';
import colors from "../global/colors";

const Header = () => {
    return (
        <View style={styles.containerTitle}>
            <Logo/>
            <Image style={styles.cart} source={cartImage}/>
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
        borderBottomColor: colors.violet,
        borderBottomWidth: 5,
    },
    cart: {
        width: 30,
        height: 30
    }
})