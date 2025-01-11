import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import { getAuthData } from "entities/User";
import { getProgressFormHealth } from "entities/ProgressForm";
import { Task, taskType } from "entities/Task";
import { fetchTask } from "entities/Task/model/services/fetchTask";

export const addHealthTask = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("healthForm/addHealthTask", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const user = getAuthData(getState());
    const userId = user?.id;
    const targetTaskTitle = getProgressFormHealth(getState());

    try {
        if (!targetTaskTitle) {
            throw new Error("пустая задача");
        }

        const response = await extra.api.post<Task>("goals", {
            userId: userId,
            title: targetTaskTitle,
            done: false,
            type: taskType.HEALTH,
        });

        dispatch(fetchTask())

        if (!response.data) {
            rejectWithValue("нет даты");
        }
    } catch (e) {
        return rejectWithValue("pizda");
    }
});
