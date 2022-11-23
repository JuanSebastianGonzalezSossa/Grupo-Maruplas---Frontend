import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, authSlice, userSlice, rutaSlice, clienteSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        user: userSlice.reducer,
        ruta: rutaSlice.reducer,
        cliente: clienteSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})