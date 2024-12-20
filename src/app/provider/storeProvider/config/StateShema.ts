import { User } from "entities/User";
import { loginSchema } from "features/AuthoriztionCard/model/types/loginShema";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";

export interface StateSchema {
    user: User;
    login: loginSchema;
    //@ts-ignore
    [userApi.reducerPath]: ReturnType<userApi.reducer>;
    //
    logingForm?:loginSchema
}
