import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products.json`
        }),
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
        getOrders: builder.query({
            query: (localId) => `orders.json?orderBy="user"&equalTo="${localId}"`
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image
                }
            })
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`
        }),
        postUserLocation: builder.mutation({
            query: ({location, localId}) => ({
                url: `locations/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address
                }
            })
        })
    } )
})

export const { 
    useGetProductsQuery, 
    useGetCategoriesQuery, 
    useGetProductsByCategoryQuery, 
    usePostOrderMutation, 
    useGetOrdersQuery, 
    useGetProfileImageQuery, 
    usePostProfileImageMutation,
    useGetUserLocationQuery,
    usePostUserLocationMutation
    } = shopApi;
