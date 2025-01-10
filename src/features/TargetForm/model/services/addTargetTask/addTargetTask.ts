import { fetchTask } from './../../../../../entities/Task/model/services/fetchTask';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import { getAuthData } from "entities/User";
import { getProgressFormTarget } from "entities/ProgressForm";
import { Task, taskType } from "entities/Task";

export const addTargetTask = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("targetForm/addTargetTask", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const user = getAuthData(getState());
    const userId = user?.id;
    const targetTaskTitle = getProgressFormTarget(getState());

    try {
        if (!targetTaskTitle) {
            throw new Error("пустая задача");
        }

        const response = await extra.api.post<Task>("goals", {
            userId: userId,
            title: targetTaskTitle,
            done: false,
            type: taskType.TARGET,
        });

        dispatch(fetchTask())

        if (!response.data) {
            rejectWithValue("нет даты");
        }
    } catch (e) {
        return rejectWithValue("pizda");
    }
});
