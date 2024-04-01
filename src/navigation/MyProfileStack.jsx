import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import ListAddress from "../screens/ListAddress";
import LocationSelector from "../screens/LocationSelector";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {

    return (
            <Stack.Navigator initialRouteName="MyProfile" screenOptions={({route}) => ({
                header: () => {
                    return (
                        <Header title={"Mi cuenta"}/>
                    )
                }
            })} >
                <Stack.Screen name="MyProfile" component={MyProfile}/>
                <Stack.Screen name="ImageSelector" component={ImageSelector}/>
                <Stack.Screen name="ListAddress" component={ListAddress}/>
                <Stack.Screen name="LocationSelector" component={LocationSelector}/>
            </Stack.Navigator>
    )
}

export default MyProfileStack;