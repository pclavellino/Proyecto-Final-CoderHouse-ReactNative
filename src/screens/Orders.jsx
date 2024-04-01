import { View, FlatList } from "react-native";
import { useGetOrdersQuery } from "../services/shopService";
import { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const Orders = () => {

    const localId = useSelector((state) => state.authReducer.value.localId)
    const { data: allOrders, isLoading, error } = useGetOrdersQuery(localId)
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        if (allOrders) {
            const ordersArray = Object.values(allOrders)
            setOrders(ordersArray)
        }
    }, [allOrders])

    if (isLoading) {
        return <Loader/>
    } else {
        return (
            <View>
                <FlatList
                data={orders}
                renderItem={({item}) => <OrderItem order={item}/>}
                keyExtractor={(order) => order.id}
                />
            </View>
        )
    }

}

export default Orders;