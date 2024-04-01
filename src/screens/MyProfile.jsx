import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ChangeButton from '../components/ChangeButton';
import ProfileImage from "../components/ProfileImage";

const MyProfile = ({navigation}) => {

    const { user, imageProfile: image } = useSelector((state) => state.authReducer.value)

    return (
        <View style={styles.container}>
            <Text style={styles.userTitle}>Usuario:</Text>
            <Text style={styles.user}>{user}</Text>
            <View style={styles.profileImage}>
                <ProfileImage image={image}/>
            </View>
            <ChangeButton text={"Agregar Foto de Perfil"} onPress={() => navigation.navigate("ImageSelector")} style={styles.button}/>
            <ChangeButton text={"Mi Dirección"} onPress={() => navigation.navigate("ListAddress")} style={styles.button}/>
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
        fontSize: 24,
        fontWeight: 'bold'
    },
    user: {
        fontSize: 20
    },
    profileImage: {
        marginVertical: 25,
        width: 200,
        height: 200,
    },  
    button: {
        margin: '2.5%'
    }
})

export default MyProfile;