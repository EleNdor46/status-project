import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task, taskType } from "entities/Task";
import { completedTask } from "entities/CompletedTask/model/type/completedTaskSchema";
import { intellectFormSchema } from "../type/intellectFormSchema";
const initialState: intellectFormSchema = {
    progressValue: 0,
    error: undefined,
    isLoading: false,
};

const intellectFormSlice = createSlice({
    name: "intellectForm",
    initialState,
    reducers: {
        getProgressValue: (
            state,
            action: PayloadAction<{
                task: Task[];
                completedTask: completedTask[];
            }>
        ) => {
            const intellectTasks = action.payload.task.filter(
                (task: Task) => task.type === taskType.INTELLECT
            );
            const intellectCompletedTasks = action.payload.completedTask.filter(
                (task: Task) => task.type === taskType.INTELLECT
            );
            const valueAllTasks =
                intellectTasks.length + intellectCompletedTasks.length;
            state.progressValue = Number(
                (
                    (intellectCompletedTasks.length / valueAllTasks) *
                    100
                ).toFixed(0)
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

export const { reducer: intellectFormReducers } = intellectFormSlice;
export const { actions: intellectFormActions } = intellectFormSlice;
