import { createSlice } from "@reduxjs/toolkit";
import allProducts from '../../data/products.json';
import allCategories from '../../data/categories.json';

export const shopSlice = createSlice({
    name: 'shop', 
    initialState: {
        value: {
            categories: allCategories,
            products: allProducts,
            categorySelected: '',
            productSelected: null,
            productsFilteredByCategory: [],
        }   
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload;
            const productFiltered = allProducts.filter((item) => item.category === categorySelected);
            state.value.categorySelected = categorySelected;
            state.value.productsFilteredByCategory = productFiltered;           
        },
        setProductSelected: (state, action) => {
            state.value.productSelected = action.payload
        }

    }

})

export const { setCategorySelected, setProductSelected } = shopSlice.actions;

export default shopSlice.reducer;