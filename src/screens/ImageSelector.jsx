import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage, setProfileImage } from "../features/auth/authSlice";
import ChangeButton from "../components/ChangeButton";
import * as ImagePicker from "expo-image-picker";
import { usePostProfileImageMutation } from "../services/shopService";
import colors from "../global/colors";
import ProfileImage from "../components/ProfileImage";

const ImageSelector = ({navigation}) => {

    const {imageProfile, localId} = useSelector((state) => state.authReducer.value)
    const [cameraPermissionError, setCameraPermissionError] = useState(false)
    const [image, setImage] = useState(imageProfile)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [3, 4],
                base64: true,
                quality: 1
            })
            if (!result.canceled) {
                setImage(result.assets[0].uri)
            }
        } else {
            setCameraPermissionError(true)
        }
    }

    const confirmImage = () => {
        dispatch(setCameraImage(image))
        dispatch(setProfileImage(image))
        triggerSaveProfileImage({image, localId})
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            { image ? 
            <>
                <View style={styles.image}>
                    <ProfileImage image={image}/>
                </View>
                <ChangeButton text={"Tomar otra Foto"} onPress={pickImage}/>
                <ChangeButton text={"Confirmar Foto"} onPress={confirmImage}/>
            </>
            :
            <>
                <View style={styles.image}>
                    <ProfileImage image={image}/>
                </View>
                <ChangeButton text={"Tomar Foto"} onPress={pickImage}/> 
                { cameraPermissionError ? <Text style={styles.error}>Habilita los permisos de la camara para tomar la foto</Text> : null }
            </> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: '5%',
        borderRadius: 100
    },
    error: {
        width: '80%',
        textAlign: 'center',
        fontSize: 16,
        color: colors.red,
        fontWeight: 'bold',
    }
})

export default ImageSelector;

