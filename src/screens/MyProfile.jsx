import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ChangeButton from '../components/ChangeButton';

const MyProfile = ({navigation}) => {

    const { user, imageCamera: image} = useSelector((state) => state.authReducer.value)

    return (
        <View style={styles.container}>
            <Text style={styles.userTitle}>Usuario:</Text>
            <Text style={styles.user}>{user}</Text>
            { image ? (
                <Image style={styles.image} source={{uri: image}} resizeMode="contain"/>
            ) : (
                <Image style={styles.image} source={require("../../assets/defaultProfileImage.png")} resizeMode="contain"/>
            )}
            <ChangeButton text={"Cambiar Foto de Perfil"} onPress={() => navigation.navigate("ImageSelector")} style={styles.button}/>
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
    userTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    user: {
        fontSize: 20
    },
    image: {
        width: '40%',
        height: '40%',
        marginVertical: '5%'
    },
    button: {
        margin: '2.5%'
    }
})

export default MyProfile;