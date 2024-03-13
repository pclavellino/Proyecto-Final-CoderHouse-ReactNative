import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { setProfileImage } from "../features/auth/authSlice";
import { useEffect } from "react";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {

    const {user, localId} = useSelector((state) => state.authReducer.value)
    const dispatch = useDispatch()
    const { data, isLoading, error } = useGetProfileImageQuery(localId)

    useEffect(() => {
        if (data) {
            dispatch(setProfileImage(data.image))
        }
    }, [data])

    return (
    <NavigationContainer>
        { user ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
    )
}

export default MainNavigator;