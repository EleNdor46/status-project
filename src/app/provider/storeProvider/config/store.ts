import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateShema";
import { userReducers } from "entities/User/model/slice/userSlice";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";
import { loginReducers } from "features/AuthoriztionCard/model/slice/loginSlice";
import { AxiosInstance } from "axios";
import { progressFormReducers } from "entities/ProgressForm/model/slice/ProgressFormSlice";
import { targetFormReducers } from "features/TargetForm";
import { taskReducers } from "entities/Task/model/slice/taskSlice";
import { $api } from "shared/api/api";
import { completedTaskReducers } from "entities/CompletedTask";
import { healthFormReducers } from "features/healthForm/model/slice/healthFormSlice";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducers,
        login: loginReducers,
        progressForm: progressFormReducers,
        targetForm: targetFormReducers,
        task: taskReducers,
        completedTask: completedTaskReducers,
        healthForm: healthFormReducers,
        ///
        [userApi.reducerPath]: userApi.reducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleWare) =>
            getDefaultMiddleWare({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(userApi.middleware),
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
