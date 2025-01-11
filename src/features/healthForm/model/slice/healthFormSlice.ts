import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task, taskType } from "entities/Task";
import { completedTask } from "entities/CompletedTask/model/type/completedTaskSchema";
import { healthFormSchema } from "../type/healthFormSchema";
const initialState: healthFormSchema = {
    progressValue: 0,
    error: undefined,
    isLoading: false,
};

const healthFormSlice = createSlice({
    name: "healthForm",
    initialState,
    reducers: {
        getProgressValue: (
            state,
            action: PayloadAction<{
                task: Task[];
                completedTask: completedTask[];
            }>
        ) => {
            const healthTasks = action.payload.task.filter(
                (task: Task) => task.type === taskType.HEALTH
            );
            const healthCompletedTasks = action.payload.completedTask.filter(
                (task: Task) => task.type === taskType.HEALTH
            );
            const valueAllTasks =
            healthTasks.length + healthCompletedTasks.length;
            state.progressValue = Number(
                ((healthCompletedTasks.length / valueAllTasks) * 100).toFixed(0)
            );
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(addTargetTask.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     });

    //     builder.addCase(addTargetTask.fulfilled, (state , acton) => {

    //         state.isLoading = false;
    //     });

    //     builder.addCase(addTargetTask.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     });
    // },
});

export const { reducer: healthFormReducers } = healthFormSlice;
export const { actions: healthFormActions } = healthFormSlice;
