import { View, Image, StyleSheet } from "react-native";
import { googleAPI } from "../firebase/googleAPI";


const MapPreview = ({location}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}
    &key=${googleAPI.mapStatic}`;

    return (
        <View>
            <Image source={{uri: mapPreviewUrl}} style={styles.map}/>
        </View>
    )

}

const styles = StyleSheet.create({
        map: {
            width: 250,
            height: 250,
            marginVertical: 35
        }
    }
)

export default MapPreview;