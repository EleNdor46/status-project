import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateShema";
import { userReducers } from "entities/User/model/slice/userSlice";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducers,
        [userApi.reducerPath]: userApi.reducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleWare) =>
            getDefaultMiddleWare().concat(userApi.middleware),
    });
    return store;
};
