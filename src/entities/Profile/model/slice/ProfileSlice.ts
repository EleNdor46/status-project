import { Profile } from "./../type/profileShema";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    value: number;
}

const initialState = { value: 0 };

const ProfileSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export { profileActions : actions } = ProfileSlice 