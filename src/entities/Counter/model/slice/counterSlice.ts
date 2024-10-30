import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/provider/storeProvider/config/StateShema";
import { Counter } from "../types/counterShcema";

const initialState: Counter = {
    count: 0,
};

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            ++state.count;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});
export const { reducer: CounterReducer } = CounterSlice;
export const { actions: CounterActions } = CounterSlice;
