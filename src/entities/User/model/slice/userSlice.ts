import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../type/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorageKey";
const initialState: User = {
    id: undefined,
    username: undefined,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.completedGoals = action.payload.completedGoals;
            state.goals = action.payload.goals;
            state.password = action.payload.password;
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify({
                    username: state.username,
                    password: state.password,
                })
            );
        },
        initUserData: (state) => {
            if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
                const user: User = JSON.parse(
                    localStorage.getItem(USER_LOCALSTORAGE_KEY) as string
                );
                state.username = user.username;
                state.id = user.id;
            }
        },
    },
});

export const { reducer: userReducers } = userSlice;
export const { actions: userActions } = userSlice;
