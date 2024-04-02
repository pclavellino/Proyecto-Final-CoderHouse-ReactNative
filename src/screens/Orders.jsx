import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useGetOrdersQuery } from "../services/shopService";
import { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const Orders = () => {

    const localId = useSelector((state) => state.authReducer.value.localId)
    const { data: allOrders, isLoading, error, refetch } = useGetOrdersQuery(localId)
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        refetch()
    }, [refetch])

    useEffect(() => {
        if (allOrders) {
            const ordersArray = Object.values(allOrders)
            setOrders(ordersArray)
        }
    }, [allOrders])

    useFocusEffect(
        React.useCallback(() => {
            refetch()
        }, [])
    )

    if (isLoading) {
        return <Loader/>
    }
        
    if (error) {
        return <Error error={error.message}/>
    }

    if (orders.length > 0) {
        return (
            <View>
                <FlatList
                data={orders}
                renderItem={({item}) => <OrderItem order={item}/>}
                keyExtractor={(order) => order.id}
                />
            </View>
        )} else {
            return (
                <View style={styles.container}>
                    <Text style={styles.noProductText}>No se encontraron ordenes.</Text>
                </View>
            )
        }
    }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    noProductText: {
        fontSize: 26,
        textAlign: 'center',
        padding: '15%',
        paddingTop: '20%'
    }
})

export default Orders;