import { View, Text, StyleSheet, Pressable } from "react-native";
import Logo from "./Logo";
import colors from "../global/colors";
import { AntDesign } from '@expo/vector-icons';
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteSession } from "../db";
import ProfileImage from "./ProfileImage";

const Header = ({title}) => {

    const { localId, user, imageProfile: image } = useSelector((state) => state.authReducer.value)
    const dispatch = useDispatch()

    const onLogout = async () => {
        dispatch(logout())
        const deletedSession = await deleteSession({localId})
    }

    return (
        <View>
            <View style={styles.containerTitle}>
                <Logo/>
                <View style={styles.profile}>
                    <View style={styles.profileImage}>
                        <ProfileImage image={image}/>
                    </View>
                    { user ? (
                        <Pressable onPress={onLogout}>
                            <AntDesign name="logout" size={24} color="black" />
                        </Pressable>
                        ) : null }
                    </View>
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
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        marginHorizontal: 15,
    }
})