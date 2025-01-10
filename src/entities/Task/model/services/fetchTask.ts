import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import axios from "axios";
import { Task } from "../type/taskSchema";
import { getAuthData } from "entities/User";

export const fetchTask = createAsyncThunk<
    Task[],
    undefined,
    ThunkConfig<string>
>("task/fetchTask", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const user = getAuthData(getState());
    const userId = user?.id;
    console.log(userId)
    try {
        const response = await extra.api.get<Task[]>(
            "http://localhost:8000/goals",
            {
                params: {
                    userId,
                    _expand: "user",
                },
            }
        );

        if (!response.data) {
            rejectWithValue('нет даты');
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('pizda');
    }
});
