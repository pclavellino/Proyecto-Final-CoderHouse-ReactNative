import { ActivityIndicator, View, StyleSheet } from "react-native";
import colors from "../global/colors";


const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.loader}
            size='large'
            color={colors.violet} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-arround'
    },
    loader: {
        paddingTop: '50%'
    }
})

export default Loader;