import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { targetFormSchema } from "../type/targetFormSchema";
const initialState: targetFormSchema = {
    targetGoals: [],
    completedTargetGoals: [],
    progressValue: 0,
    error: undefined,
    isLoading: false,
};

const targetFormSlice = createSlice({
    name: "targetForm",
    initialState,
    reducers: {
        getProgressValue: (state) => {
            const allTasksValue =
                state.completedTargetGoals?.length + state.targetGoals?.length;
            state.progressValue = Number(
                (
                    (state.completedTargetGoals.length / allTasksValue) *
                    100
                ).toFixed(0)
            );
            console.log(allTasksValue);
        },
        setTargetTasks: (state, action: PayloadAction<targetFormSchema>) => {
            state.targetGoals = action.payload.targetGoals;
            state.completedTargetGoals = action.payload.completedTargetGoals;
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
