import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        isSuccessOpen: false,
        message: undefined,
        isNow: {},
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
        onUpdateNow: (state, { payload }) => {
            state.isNow = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onOpenSuccess, onCloseSuccess, onUpdateNow } = uiSlice.actions;
