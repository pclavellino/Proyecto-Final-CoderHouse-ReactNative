import { View, Text, StyleSheet } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useEffect, useState } from "react";
import { useSignUpMutation } from "../services/authService" 
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

const Signup = ({navigation}) => {

    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ passwordConfirmError, setPasswordConfirmError ] = useState('');
    const [ triggerSignup, result ] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {

        setEmailError('');
        setPasswordError('');
        setPasswordConfirmError('')

        try {
            const validation = signupSchema.validateSync({email, password, passwordConfirm})
            triggerSignup({email, password})
        } catch (err) {
            switch (err.path) {
                case "email":
                    setEmailError(err.message);
                    break;
                case "password":
                    setPasswordError(err.message);
                    break;
                case "passwordConfirm":
                    setPasswordConfirmError(err.message)
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Registrese Ahora</Text>
            <InputForm label={"Correo Electrónico"} onChange={setEmail} error={emailError}/>
            <InputForm label={"Contraseña"} onChange={setPassword}isSecure={true} error={passwordError}/>
            <InputForm label={"Confirmar Contraseña"} onChange={setPasswordConfirm} isSecure={true} error={passwordConfirmError}/>
            <SubmitButton text={"Registrarse"} onPress={onSubmit}/>
            <Text style={styles.noUserText}>¿Ya esta registrado?</Text>
            <SubmitButton text={"Iniciar Sesión"} onPress={() => navigation.navigate("Login")}/>
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
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '7.5%',
    },
    noUserText: {
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 18,
    },
})

export default Signup;