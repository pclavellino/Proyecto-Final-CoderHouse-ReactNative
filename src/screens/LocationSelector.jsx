import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import ChangeButton from "../components/ChangeButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";

const LocationSelector = ({navigation}) => {

    const [location, setLocation] = useState({latitude: "", longitude: ""});
    const [address, setAddress] = useState(null)
    const [error, setError] = useState("");
    const [triggerPostAddress, result] = usePostUserLocationMutation()
    const { localId } = useSelector((state) => state.authReducer.value)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("Se bloqueo el acceso a la ubicación")
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();
    }, [])

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address)
                }
            } catch (err) {
                setError(error.message)
            }
        })();
    }, [location])

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address
        }

        dispatch(setUserLocation(locationFormatted))

        triggerPostAddress({location: locationFormatted, localId})

        navigation.goBack()
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.addressTitle}>Mi Dirección:</Text>
            { location ? (
                <View style={styles.container}>
                    <Text style={styles.address}>{address}</Text>
                    <MapPreview location={location}></MapPreview>
                    <ChangeButton text={"Confirmar Dirección"} onPress={onConfirmAddress} style={styles.button}/>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text>{error}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginVertical: '5%',
    },
    addressTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    address: {
        fontSize: 18,
        width: '80%',
        textAlign: 'center'
    },
    button: {
        margin: '2.5%'
    }
})

export default LocationSelector;