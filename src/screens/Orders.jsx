import { View, FlatList } from "react-native";
import allOrders from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Orders = () => {

    return (
        <View>
            <FlatList
            data={allOrders}
            renderItem={({item}) => <OrderItem order={item}/>}
            keyExtractor={(order) => order.id}
            />
        </View>
    )
}

export default Orders;