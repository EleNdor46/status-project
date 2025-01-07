import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProgressFormSchema } from "../type/ProgressFormSchema";
const initialState: ProgressFormSchema = {
    healthForm: "",
    intellectForm: "",
    targetForm: "",
};

const progressFormSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setHealthForm: (state, action: PayloadAction<string>) => {
            state.healthForm = action.payload;
        },
        setIntellectForm: (state, action: PayloadAction<string>) => {
            state.intellectForm = action.payload;
        },
        setTargetForm: (state, action: PayloadAction<string>) => {
            state.targetForm = action.payload;
        },
    },
});

export const { reducer: progressFormReducers } = progressFormSlice;
export const { actions: progressFormActions } = progressFormSlice;
