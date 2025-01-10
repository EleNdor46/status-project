import { createSlice } from "@reduxjs/toolkit";
import { taskSchema } from "../type/taskSchema";
import { fetchTask } from "../services/fetchTask";
const initialState: taskSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const completedTaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
     extraReducers: (builder) => {
            builder.addCase(fetchTask.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
    
            builder.addCase(fetchTask.fulfilled, (state ,action) => {
                state.isLoading = false;
                state.data = action.payload
            });
    
            builder.addCase(fetchTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        },
});

export const { reducer: taskReducers } = completedTaskSlice;
export const { actions: taskActions } = completedTaskSlice;
