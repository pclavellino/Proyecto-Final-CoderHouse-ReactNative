import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategory from "../screens/ItemListCategory";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ShopStack = () => {

    return (
            <Stack.Navigator initialRouteName="Home" screenOptions={({route}) => ({
                header: () => {
                    return (
                        <Header title={ route.name === "Home" ? "Categorias" : route.name === "ItemListCategory" ? route.params.category : "Detalle del producto" }/>
                    )
                }
            })} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ItemDetail" component={ItemDetail}/>
                <Stack.Screen name="ItemListCategory" component={ItemListCategory}/>
            </Stack.Navigator>
    )
}

export default ShopStack;