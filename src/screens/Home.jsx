import { View } from "react-native";
import Categories from "../components/Categories";

const Home = ({navigation}) => {

    return (
        <View>
            <Categories navigation={navigation}/>         
        </View>
    )
}

export default Home;