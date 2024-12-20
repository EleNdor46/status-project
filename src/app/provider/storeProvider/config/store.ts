import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateShema";
import { userReducers } from "entities/User/model/slice/userSlice";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";
import { loginReducers } from "features/AuthoriztionCard/model/slice/loginSlice";
import { AxiosInstance } from "axios";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducers,
        login: loginReducers,
        ///
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

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
