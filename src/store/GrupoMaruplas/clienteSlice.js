import { createSlice } from '@reduxjs/toolkit';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        clientes: {}
    },
    reducers: {
        onCliente: ( { payload } ) => {
            state.clientes = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { onCliente } = clienteSlice.actions;