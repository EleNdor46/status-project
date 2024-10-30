import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateShema";
import { UserReducer } from "entities/User/model/slice/UserSlice";
import { CounterReducer } from "entities/Counter/model/slice/counterSlice";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        User: UserReducer,
        Counter: CounterReducer,
    };

    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });
    return store;
};
