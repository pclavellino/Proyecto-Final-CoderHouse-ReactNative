import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import colors from "../global/colors";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";

const Login = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const [ triggerLogin, result ] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {

        setEmailError('');
        setPasswordError('')

        try {
            const validation = loginSchema.validateSync({ email, password })
            triggerLogin({email, password})
        } catch (err) {
            switch (err.path) {
                case "email":
                    setEmailError(err.message);
                    break;
                case "password":
                    setPasswordError(err.message);
                    break;
                default:
                    break;
        }
    }
}

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
            })
            .then((result) => { null })
            .catch((error) => { null })
        }
    }, [result])

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Bienvenidos a nuestra Tienda Online</Text>
            <Text style={styles.subtitle}>Iniciar Sesión</Text>
            <InputForm label={"Correo Electrónico"} onChange={setEmail} error={emailError}/>
            <InputForm label={"Contraseña"} onChange={setPassword} isSecure={true} error={passwordError}/>
            <SubmitButton text={"Iniciar Sesión"} onPress={onSubmit}/>
            <Text style={styles.noUserText}>¿No tiene usuario? Registrese gratis</Text>
            <SubmitButton text={"Registrarse"} onPress={()=> navigation.navigate("SignUp")}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5%',
        padding: '5%'
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '10%',
        color: colors.violet
    },
    noUserText: {
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 18,
    },

})

export default Login;