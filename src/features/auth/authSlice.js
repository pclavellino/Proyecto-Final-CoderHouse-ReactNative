import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        value: {
            user: null,
            token: null,
            localId: null,
            imageCamera: null,
            imageProfile: null,
            location: {
                latitude: null,
                longitude: null,
                address: null
            }
        }   
    },
    reducers: {
        setUser: (state, action) => {
            state.value = {
                user: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId
            };
        },
        clearUser: (state) => {
            state.value = {
                user: null,
                token: null
            }
        },
        setCameraImage: (state, action) => {
            state.value = {
                ...state.value,
                imageCamera: action.payload
            }
        },
        setProfileImage: (state, action) => {
            state.value = {
                ...state.value,
                imageProfile: action.payload
            }
        },
        setUserLocation: (state, action) => {
            state.value = {
                ...state.value,
                location: {
                    latitude: action.payload.latitude,
                    logitude: action.payload.longitude,
                    address: action.payload.address
                }
            }
        },
        logout: (state) => {
            state.value = {
                user: null,
                token: null,
                localId: null,
                imageCamera: null,
                imageProfile: null,
                location: {
                    latitude: null,
                    longitude: null,
                    address: null
                }
            }
        }
    }
})

export const { setUser, clearUser, setCameraImage, setProfileImage, setUserLocation, logout } = authSlice.actions;

export default authSlice.reducer;