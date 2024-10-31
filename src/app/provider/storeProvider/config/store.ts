import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateShema";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {};

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });
    return store;
};
