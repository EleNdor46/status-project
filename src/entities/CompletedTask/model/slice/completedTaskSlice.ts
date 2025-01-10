import { createSlice } from "@reduxjs/toolkit";
import { completedTaskSchema } from "../type/completedTaskSchema";
import { fetchComletedTask } from "../services/fetchCompletedTask";

const initialState: completedTaskSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const completedTaskSlice = createSlice({
    name: "completedTask",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComletedTask.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });

        builder.addCase(fetchComletedTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchComletedTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: completedTaskReducers } = completedTaskSlice;
export const { actions: completedTaskActions } = completedTaskSlice;
