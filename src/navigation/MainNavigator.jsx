import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import { setUser, setProfileImage, setUserLocation } from "../features/auth/authSlice";
import { useEffect } from "react";
import { fetchSession } from "../db";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {

    const {user, localId} = useSelector((state) => state.authReducer.value)
    const dispatch = useDispatch()
    const { data: image } = useGetProfileImageQuery(localId)
    const { data: location } = useGetUserLocationQuery(localId)

    useEffect(() => {
        if (image) {
            dispatch(setProfileImage(image.image))
        }
    }, [image])

    useEffect(() => {
        if (location) {
            dispatch(setUserLocation(location))
        }
    }, [location])

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                if (session.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                null
            }
        })()
    }, [])

    return (
    <NavigationContainer>
        { user ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
    )
}

export default MainNavigator;