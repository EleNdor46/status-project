import { User } from "entities/User";
import { loginSchema } from "features/AuthoriztionCard/model/types/loginShema";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";
import { ProgressFormSchema } from "features/ProgressForm/model/type/ProgressFormSchema";

export interface StateSchema {
    user: User;
    login: loginSchema;
    progressForm: ProgressFormSchema;
    //@ts-ignore
    [userApi.reducerPath]: ReturnType<userApi.reducer>;
    //
    logingForm?: loginSchema;
}
