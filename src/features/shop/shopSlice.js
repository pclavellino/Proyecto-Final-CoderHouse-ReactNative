import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: 'shop', 
    initialState: {
        value: {
            categorySelected: '',
            productSelected: null,
        }   
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload;          
        },
        setProductSelected: (state, action) => {
            state.value.productSelected = action.payload
        }

    }

})

export const { setCategorySelected, setProductSelected } = shopSlice.actions;

export default shopSlice.reducer;