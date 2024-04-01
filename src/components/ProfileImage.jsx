import { View, Image, StyleSheet} from "react-native";

const ProfileImage = ({image}) => {

    return (
        <View>
            {image ? (
                <Image style={styles.image} source={{uri: image}}/>
            ) : (
                <Image style={styles.image} source={require("../../assets/defaultProfileImage.png")}/>
            )}
        </View>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 200
    } 
}
)