import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { targetFormSchema } from "../type/targetFormSchema";
import { Task, taskType } from "entities/Task";
import { completedTask } from "entities/CompletedTask/model/type/completedTaskSchema";
const initialState: targetFormSchema = {
    progressValue: 0,
    error: undefined,
    isLoading: false,
};

const targetFormSlice = createSlice({
    name: "targetForm",
    initialState,
    reducers: {
        getProgressValue: (
            state,
            action: PayloadAction<{
                task: Task[];
                completedTask: completedTask[];
            }>
        ) => {
            const targetTasks = action.payload.task.filter(
                (task: Task) => task.type === taskType.TARGET
            );
            const targetCompletedTasks = action.payload.completedTask.filter(
                (task: Task) => task.type === taskType.TARGET
            );
            const valueAllTasks =
                targetTasks.length + targetCompletedTasks.length;
            state.progressValue = Number(
                ((targetCompletedTasks.length / valueAllTasks) * 100).toFixed(0)
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

export const { reducer: targetFormReducers } = targetFormSlice;
export const { actions: targetFormActions } = targetFormSlice;
