import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import { getAuthData } from "entities/User";
import { getProgressFormIntellect } from "entities/ProgressForm";
import { Task, taskType } from "entities/Task";
import { fetchTask } from "entities/Task/model/services/fetchTask";

export const addIntellectTask = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("IntellectForm/addIntellectTask", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const user = getAuthData(getState());
    const userId = user?.id;
    const intellectTaskTitle = getProgressFormIntellect(getState());

    try {
        if (!intellectTaskTitle) {
            throw new Error("пустая задача");
        }

        const response = await extra.api.post<Task>("goals", {
            userId: userId,
            title: intellectTaskTitle,
            done: false,
            type: taskType.INTELLECT,
        });

        dispatch(fetchTask());

        if (!response.data) {
            rejectWithValue("нет даты");
        }
    } catch (e) {
        return rejectWithValue("pizda");
    }
});
