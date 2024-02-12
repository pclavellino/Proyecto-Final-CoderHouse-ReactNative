import { View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({setCategorySelected}) => {

    return (
        <View>
            <Header/>
            <Categories setCategorySelected={setCategorySelected}/>         
        </View>
    )
}

export default Home;