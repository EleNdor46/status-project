import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/provider/storeProvider/config/store";
import axios from "axios";
import { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    ThunkConfig<string>
>("login/loginByUsername", async (user, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    console.log(thunkAPI);

    try {
        if (!user.username && !user.password) {
            throw new Error();
        }

        const response = await axios.post<User>(
            "http://localhost:8000/login",
            user
        );

        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setUserData(response.data));

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
