import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import { getAuthData } from "entities/User";
import { completedTask } from "../type/completedTaskSchema";

export const fetchComletedTask = createAsyncThunk<
    completedTask[],
    undefined,
    ThunkConfig<string>
>("completedTask/fetchComletedTask", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const user = getAuthData(getState());
    const userId = user?.id;
    console.log(userId);
    try {
        const response = await extra.api.get<completedTask[]>(
            "completedGoals",
            {
                params: {
                    userId,
                    _expand: "user",
                },
            }
        );

        if (!response.data) {
            rejectWithValue("нет даты");
        }
        return response.data;
    } catch (e) {
        return rejectWithValue("pizda");
    }
});
