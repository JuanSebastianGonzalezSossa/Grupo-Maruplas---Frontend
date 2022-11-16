import { createSlice } from '@reduxjs/toolkit';

export const rutaSlice = createSlice({
    name: 'ruta',
    initialState: {
        rutas: {}
    },
    reducers: {
        onRutas: (state, { payload }) => {
            state.rutas = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { onRutas } = rutaSlice.actions;