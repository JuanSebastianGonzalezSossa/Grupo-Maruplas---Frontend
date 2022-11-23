import { createSlice } from '@reduxjs/toolkit';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        clientes: {}
    },
    reducers: {
        onClientes: (state, { payload }) => {
            state.clientes = payload
        },
        onAddNewCliente: ( state, { payload }) => {
            state.clientes.push( payload );
        },
        onUpdateCliente: ( state, { payload } ) => {
            state.clientes.push( payload );
        },
    }
});


// Action creators are generated for each case reducer function
export const { onClientes, onAddNewCliente, onUpdateCliente } = clienteSlice.actions;