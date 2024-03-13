import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/SignUp";
import Header from "../components/Header";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
            <Stack.Navigator initialRouteName="Login" screenOptions={({route}) => ({
                header: () => {
                    return (
                        <Header title={""}/>
                    )
                }
            })}>
                <Stack.Screen name="Login" component={Login}/>          
                <Stack.Screen name="SignUp" component={Signup}/>
            </Stack.Navigator>
        )
}

export default AuthStack;