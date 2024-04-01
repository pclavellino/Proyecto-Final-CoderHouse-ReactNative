import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    return (
        <Stack.Navigator initialRouteName="Orders" screenOptions={({route}) => ({
            header: () => {
                return (
                    <Header title={ "Mis Pedidos" }/>
                )
            }
        })} >
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrderStack;