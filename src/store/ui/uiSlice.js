import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        isSuccessOpen: false,
        message: undefined
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
        onOpenSuccess: ( state, {payload} ) => {
            state.isSuccessOpen = true;
            state.message = payload;
        },
        onCloseSuccess: ( state ) => {
            state.isSuccessOpen = false;
            state.message = undefined;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onOpenSuccess, onCloseSuccess } = uiSlice.actions;
