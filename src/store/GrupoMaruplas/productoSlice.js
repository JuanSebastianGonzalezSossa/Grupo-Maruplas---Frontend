import { createSlice } from '@reduxjs/toolkit';

export const productoslice = createSlice({
    name: 'producto',
    initialState: {
        productos: {},
    },
    reducers: {
        onProductos: (state, { payload }) => {
            state.productos = payload
        },
        onAddNewProductos: ( state, { payload }) => {
            state.productos.push( payload );
        },
        onUpdateProductos: ( state, { payload } ) => {
            state.productos.push( payload );
        },
    }
});


// Action creators are generated for each case reducer function
export const { onProductos, onUpdateProductos, onAddNewProductos } = productoslice.actions;