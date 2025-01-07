import { ProgressFormSchema } from "entities/ProgressForm/model/type/ProgressFormSchema";
import { User } from "entities/User";
import { loginSchema } from "features/AuthoriztionCard/model/types/loginShema";
import { userApi } from "features/ProfileCard/api/getUserProfileApi";

export interface StateSchema {
    user: User;
    login: loginSchema;
    progressForm: ProgressFormSchema;
    //@ts-ignore
    [userApi.reducerPath]: ReturnType<userApi.reducer>;
    //
    logingForm?: loginSchema;
}
