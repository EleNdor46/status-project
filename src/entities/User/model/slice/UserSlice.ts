import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/provider/storeProvider/config/StateShema";
import { UserShema } from "../types/userSchema";

const initialState: UserShema = {};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});
export const { reducer: UserReducer } = UserSlice;
export const { actions: UserActions } = UserSlice;
