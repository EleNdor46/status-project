import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../type/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorageKey";
const initialState: User = {
    id: undefined,
    username: undefined,
    completedGoals: {
        completedTargetGoals: [],
        completedIntellectGoals: [],
        completedSportGoals: [],
    },
    goals: {
        intellectGoals: [],
        sportGoals: [],
        targetGoals: [],
    },
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
            const user: User = {
                username: state.username,
                password: state.password,
                id: state.id,
                completedGoals: state.completedGoals,
                goals: state.goals,
            };
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
        },
        initUserData: (state) => {
            if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
                const user = JSON.parse(
                    localStorage.getItem(USER_LOCALSTORAGE_KEY) as string
                );
                state.id = user.id;
                state.username = user.username;
                state.completedGoals = user.completedGoals;
                state.goals = user.goals;
                state.password = user.password;
            }
        },
    },
});

export const { reducer: userReducers } = userSlice;
export const { actions: userActions } = userSlice;
